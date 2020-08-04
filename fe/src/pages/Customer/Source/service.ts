import request from 'umi-request';
import { TableListParams, TableListItemParams } from './data.d';

export async function querySource(params?: TableListParams) {
  const result = await request<API.PageRO>('/api/sources', {
    params,
  });
  return {
    success: result.success,
    ...result.data,
  }
}

export async function removeSource(params: { ids: string[] }) {
  return request('/api/sources', {
    method: 'DELETE',
    data: {
      ...params,
    },
  });
}

export async function addSource(params: TableListItemParams) {
  return request('/api/sources', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function updateSource(id: string, params: TableListItemParams) {
  return request(`/api/sources/${id}`, {
    method: 'PUT',
    data: {
      ...params,
    },
  });
}
