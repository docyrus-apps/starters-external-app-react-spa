// Generated collection for crm/null
import { apiClient } from '../../lib/api-client';
import type { CrmNullEntity } from '../types';

export const crmNullCollection = {
  list: (params?: { limit?: number; offset?: number; columns?: string[]; filterQuery?: any }) => 
    apiClient.get('/v1/apps/crm/data-sources/null/items', params),

  get: (recordId: string, params?: { columns?: string[] }) => 
    apiClient.get('/v1/apps/crm/data-sources/null/items/{recordId}'.replace('{recordId}', recordId), params),

  create: (data: { data: any }) => 
    apiClient.post('/v1/apps/crm/data-sources/null/items', data),

  update: (recordId: string, data: { data: any }) => 
    apiClient.patch('/v1/apps/crm/data-sources/null/items/{recordId}'.replace('{recordId}', recordId), data),

  delete: (recordId: string) => 
    apiClient.delete('/v1/apps/crm/data-sources/null/items/{recordId}'.replace('{recordId}', recordId)),

  deleteMany: (data: { recordIds: string[] }) => 
    apiClient.delete('/v1/apps/crm/data-sources/null/items', data)
};
