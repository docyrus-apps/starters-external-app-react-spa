// Generated collection for custom/assets
import { apiClient } from '../../lib/api-client';
import type { CustomAssetsEntity } from '../types';

export const customAssetsCollection = {
  list: (params?: { limit?: number; offset?: number; columns?: string[]; filterQuery?: any }) => 
    apiClient.get('/v1/apps/custom/data-sources/assets/items', params),

  get: (recordId: string, params?: { columns?: string[] }) => 
    apiClient.get('/v1/apps/custom/data-sources/assets/items/{recordId}'.replace('{recordId}', recordId), params),

  create: (data: { data: any }) => 
    apiClient.post('/v1/apps/custom/data-sources/assets/items', data),

  update: (recordId: string, data: { data: any }) => 
    apiClient.patch('/v1/apps/custom/data-sources/assets/items/{recordId}'.replace('{recordId}', recordId), data),

  delete: (recordId: string) => 
    apiClient.delete('/v1/apps/custom/data-sources/assets/items/{recordId}'.replace('{recordId}', recordId)),

  deleteMany: (data: { recordIds: string[] }) => 
    apiClient.delete('/v1/apps/custom/data-sources/assets/items', data)
};
