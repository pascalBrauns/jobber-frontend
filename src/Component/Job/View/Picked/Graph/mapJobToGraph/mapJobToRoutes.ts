import { Route, Pipeline, Bridge } from 'Type/Job';

const combineRoutes = (...routes: Route[]) => routes.reduce(
  (combined, route) => [
    ...combined,
    ...route
  ],
  []
);

const connectRoutesToOrigins = (
  origins: Route[],
  routes: Route[]
) => routes.reduce(
  (combined, route) => [
    ...combined,
    ...origins.map(origin => combineRoutes(origin, route))
  ],
  [] as Route[]
);

const mapPipelineToRoutes = ({ jobs }: Pipeline): Route[] => jobs.reduce(
  (origins, job) => {
    if (job.type === 'task') {
      if (origins.length) {
        return origins.map(origin => [
          ...origin,
          job
        ]);
      }
      else {
        return [
          [job]
        ];
      }
    }
    else {
      const routes = (
        job.type === 'pipeline'
          ? mapPipelineToRoutes(job)
          : mapBridgeToRoutes(job)
      );

      if (origins.length) {
        return connectRoutesToOrigins(origins, routes);
      }
      else {
        return routes;
      }
    }
  },
  [] as Route[]
)

const mapBridgeToRoutes = ({ jobs }: Bridge): Route[] => jobs.reduce(
  (origins, job) => {
    if (job.type === 'task') {
      return [
        ...origins,
        [job]
      ];
    }
    else {
      const routes = (
        job.type === 'pipeline'
          ? mapPipelineToRoutes(job)
          : mapBridgeToRoutes(job)
      );
      return [
        ...origins,
        ...routes
      ];
    }
  },
  [] as Route[]
);

const mapJobToRoutes = (job: Pipeline | Bridge): Route[] => {
  if (job.type === 'pipeline') {
    return mapPipelineToRoutes(job);
  }
  else {
    return mapBridgeToRoutes(job);
  }
}

export default mapJobToRoutes;
