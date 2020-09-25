import { Status, Type } from 'Type/Job';

export const query = ({ statuses, types, ...lifetime }: {
  statuses: Status[];
  types: Type[];
  start: Date;
  end: Date;
}) => {
  const parameters = [];

  const start = (
    lifetime.start
      ? `start=${Math.round(lifetime.start.getTime() / 1000)}`
      : ''
  );

  if (start) {
    parameters.push(start);
  }

  const end = (
    lifetime.end
      ? `end=${Math.round(lifetime.end.getTime() / 1000)}`
      : ''
  );

  if (end) {
    parameters.push(end);
  }

  const status = statuses.reduce(
    (query, status) => query + (query.length ? '&' : '') + `status=${status}`,
    ''
  );

  if (status) {
    parameters.push(status);
  }

  const type = types.reduce(
    (query, type) => query + (query.length ? '&' : '') + `type=${type}`,
    ''
  );

  if (type) {
    parameters.push(type);
  }

  if (parameters.length) {
    return `?${parameters.join('&')}`;
  }
  else {
    return '';
  }
}
