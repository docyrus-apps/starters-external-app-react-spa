// Generated collection for base/time_entry
import { apiClient } from '../../lib/api-client';
import type { BaseTimeEntryEntity } from '../types';

export const baseTimeEntryCollection = {
  list: (params?: { limit?: number; offset?: number; columns?: string[]; filterQuery?: any }) => 
    apiClient.get('/v1/apps/base/data-sources/time_entry/items', params),

  get: (recordId: string, params?: { columns?: string[] }) => 
    apiClient.get('/v1/apps/base/data-sources/time_entry/items/{recordId}'.replace('{recordId}', recordId), params),

  create: (data: { data: any }) => 
    apiClient.post('/v1/apps/base/data-sources/time_entry/items', data),

  update: (recordId: string, data: { data: any }) => 
    apiClient.patch('/v1/apps/base/data-sources/time_entry/items/{recordId}'.replace('{recordId}', recordId), data),

  delete: (recordId: string) => 
    apiClient.delete('/v1/apps/base/data-sources/time_entry/items/{recordId}'.replace('{recordId}', recordId)),

  deleteMany: (data: { recordIds: string[] }) => 
    apiClient.delete('/v1/apps/base/data-sources/time_entry/items', data)
};
