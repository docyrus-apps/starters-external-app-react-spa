// Generated collection for users
import { apiClient } from '../../lib/api-client';
import type { UserCreateParams, UserEntity, UserUpdateParams, UserDeviceDto } from '../types';

export const UsersCollection = {
  getUsers: () => 
    apiClient.get('/v1/users'),

  createUser: (data: any) => 
    apiClient.post('/v1/users', data),

  getMyInfo: () => 
    apiClient.get('/v1/users/me'),

  updateMe: (data: any) => 
    apiClient.patch('/v1/users/me', data),

  updateUser: (userId: string, data: any) => 
    apiClient.patch('/v1/users/{userId}'.replace('{userId}', userId), data),

  changeUserStatus: (userId: string, status: string) => 
    apiClient.put('/v1/users/{userId}/status/{status}'.replace('{userId}', userId).replace('{status}', status)),

  saveUserDevice: (data: any) => 
    apiClient.post('/v1/users/device', data)
};
