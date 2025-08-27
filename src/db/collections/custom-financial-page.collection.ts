// Generated collection for custom/financial-page
import { apiClient } from '../../lib/api-client';
import type { CustomFinancialPageEntity } from '../types';

export const customFinancialPageCollection = {
  list: (params?: { limit?: number; offset?: number; columns?: string[]; filterQuery?: any }) => 
    apiClient.get('/v1/apps/custom/data-sources/financial-page/items', params),

  get: (recordId: string, params?: { columns?: string[] }) => 
    apiClient.get('/v1/apps/custom/data-sources/financial-page/items/{recordId}'.replace('{recordId}', recordId), params),

  create: (data: { data: any }) => 
    apiClient.post('/v1/apps/custom/data-sources/financial-page/items', data),

  update: (recordId: string, data: { data: any }) => 
    apiClient.patch('/v1/apps/custom/data-sources/financial-page/items/{recordId}'.replace('{recordId}', recordId), data),

  delete: (recordId: string) => 
    apiClient.delete('/v1/apps/custom/data-sources/financial-page/items/{recordId}'.replace('{recordId}', recordId)),

  deleteMany: (data: { recordIds: string[] }) => 
    apiClient.delete('/v1/apps/custom/data-sources/financial-page/items', data)
};
