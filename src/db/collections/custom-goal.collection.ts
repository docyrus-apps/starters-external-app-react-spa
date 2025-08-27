// Generated collection for custom/goal
import { apiClient } from '../../lib/api-client';
import type { CustomGoalEntity } from '../types';

export const customGoalCollection = {
  list: (params?: { limit?: number; offset?: number; columns?: string[]; filterQuery?: any }) => 
    apiClient.get('/v1/apps/custom/data-sources/goal/items', params),

  get: (recordId: string, params?: { columns?: string[] }) => 
    apiClient.get('/v1/apps/custom/data-sources/goal/items/{recordId}'.replace('{recordId}', recordId), params),

  create: (data: { data: any }) => 
    apiClient.post('/v1/apps/custom/data-sources/goal/items', data),

  update: (recordId: string, data: { data: any }) => 
    apiClient.patch('/v1/apps/custom/data-sources/goal/items/{recordId}'.replace('{recordId}', recordId), data),

  delete: (recordId: string) => 
    apiClient.delete('/v1/apps/custom/data-sources/goal/items/{recordId}'.replace('{recordId}', recordId)),

  deleteMany: (data: { recordIds: string[] }) => 
    apiClient.delete('/v1/apps/custom/data-sources/goal/items', data)
};
