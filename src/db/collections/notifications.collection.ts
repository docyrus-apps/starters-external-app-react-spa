// Generated collection for notifications
import { apiClient } from '../../lib/api-client';


export const NotificationsCollection = {
  getNotifications: () => 
    apiClient.get('/v1/notifications'),

  markNotificationAsRead: (notification_id: string) => 
    apiClient.put('/v1/notifications/{notification_id}/status/read'.replace('{notification_id}', notification_id)),

  markNotificationAsUnread: (notification_id: string) => 
    apiClient.put('/v1/notifications/{notification_id}/status/unread'.replace('{notification_id}', notification_id)),

  markAllNotificationsAsRead: () => 
    apiClient.put('/v1/notifications/status/read')
};
