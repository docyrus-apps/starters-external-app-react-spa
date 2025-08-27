// Generated collection for base/activity
import { apiClient } from '../../lib/api-client';
import type { BaseActivityEntity } from '../types';

export const baseActivityCollection = {
  list: (params?: { limit?: number; offset?: number; columns?: string[]; filterQuery?: any }) => 
    apiClient.get('/v1/apps/base/data-sources/activity/items', params),

  get: (recordId: string, params?: { columns?: string[] }) => 
    apiClient.get('/v1/apps/base/data-sources/activity/items/{recordId}'.replace('{recordId}', recordId), params),

  create: (data: { data: any }) => 
    apiClient.post('/v1/apps/base/data-sources/activity/items', data),

  update: (recordId: string, data: { data: any }) => 
    apiClient.patch('/v1/apps/base/data-sources/activity/items/{recordId}'.replace('{recordId}', recordId), data),

  delete: (recordId: string) => 
    apiClient.delete('/v1/apps/base/data-sources/activity/items/{recordId}'.replace('{recordId}', recordId)),

  deleteMany: (data: { recordIds: string[] }) => 
    apiClient.delete('/v1/apps/base/data-sources/activity/items', data)
};
