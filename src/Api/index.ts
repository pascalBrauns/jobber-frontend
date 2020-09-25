import axios from 'axios';
import { Job, ID, Status, Type, Query, Blueprint } from 'Type/Job';
import { query } from './Query';

export const loadJob = ({ id }: {
  id: ID;
}) => axios.get<Job>(`/api/job/${id}`);

export const loadJobs = (parameters: {
  statuses: Status[];
  types: Type[];
  start: Date;
  end: Date;
}) => axios.get<Job[]>(`/api/jobs${query(parameters)}`);

export const setStatus = ({ id, status }: {
  id: ID;
  status: Status;
}) => axios.post(`/api/job/${id}/status/${status}`);

export const createJob = (query: Query) => axios.put<Blueprint>(`/api/job`, query);

export const suspendJob = (id: string) => axios.post(`/api/job/${id}/status`, {
  status: 'suspended'
});

export const resumeJob = (id: string) => axios.post(`/api/job/${id}/status`, {
  status: 'active'
});

export const cancelJob = (id: string) => axios.post(`/api/job/${id}/status`, {
  status: 'canceled'
});

export const loadBlueprints = () => axios.get<Blueprint[]>(`/api/blueprints`);
