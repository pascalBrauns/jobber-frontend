import { IChart } from "@mrblenny/react-flow-chart";
import mapJobToGraph from './mapJobToGraph';
import { Job } from 'Type/Job';
import mapGraphToChart from './mapGraphToChart';

const mapJobToChart = (job: Job): IChart => {
  const graph = mapJobToGraph(job);
  const chart = mapGraphToChart(graph);
  return chart;
}

export default mapJobToChart;
