import { MemoryTokenManager, RestApiClient } from '@docyrus/api-client';

const API_BASE_URL = import.meta.env.VITE_DOCYRUS_API_URL || 'https://api.docyrus.app';
const API_TOKEN = import.meta.env.VITE_DOCYRUS_API_TOKEN || '';

// Create token manager and set initial token
const tokenManager = new MemoryTokenManager();
if (API_TOKEN) {
  tokenManager.setToken(API_TOKEN);
}

// Create the API client instance
export const apiClient = new RestApiClient({
  baseURL: API_BASE_URL,
  tokenManager
});

// Add request interceptor for custom param handling
apiClient.use({
  request: (config) => {
    // Handle columns array parameter - join as comma-separated
    if (config.params && config.params.columns && Array.isArray(config.params.columns)) {
      config.params = {
        ...config.params,
        columns: config.params.columns.join(',')
      };
    }
    return config;
  }
});