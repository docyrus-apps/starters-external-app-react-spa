// Generated collection for custom/ai_case_study
import { apiClient } from '../../lib/api-client';
import type { CustomAiCaseStudyEntity } from '../types';

export const customAiCaseStudyCollection = {
  list: (params?: { limit?: number; offset?: number; columns?: string[]; filterQuery?: any }) => 
    apiClient.get('/v1/apps/custom/data-sources/ai_case_study/items', params),

  get: (recordId: string, params?: { columns?: string[] }) => 
    apiClient.get('/v1/apps/custom/data-sources/ai_case_study/items/{recordId}'.replace('{recordId}', recordId), params),

  create: (data: { data: any }) => 
    apiClient.post('/v1/apps/custom/data-sources/ai_case_study/items', data),

  update: (recordId: string, data: { data: any }) => 
    apiClient.patch('/v1/apps/custom/data-sources/ai_case_study/items/{recordId}'.replace('{recordId}', recordId), data),

  delete: (recordId: string) => 
    apiClient.delete('/v1/apps/custom/data-sources/ai_case_study/items/{recordId}'.replace('{recordId}', recordId)),

  deleteMany: (data: { recordIds: string[] }) => 
    apiClient.delete('/v1/apps/custom/data-sources/ai_case_study/items', data)
};
