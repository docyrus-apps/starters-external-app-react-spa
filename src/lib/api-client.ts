import { supabase } from './supabase'

const API_BASE_URL = import.meta.env.VITE_DOCYRUS_API_URL

export const apiClient = {
  async fetch(path: string, options?: RequestInit & { params?: any }) {
    let url = `${API_BASE_URL}${path}`

    // Get the current session to retrieve the access token
    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (!session) {
      throw new Error('No active session. Please sign in.')
    }

    // Handle query parameters
    if (options?.params) {
      const searchParams = new URLSearchParams()
      Object.entries(options.params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          if (Array.isArray(value)) {
            // For columns parameter, join as comma-separated values
            if (key === 'columns') {
              searchParams.append(key, value.join(','))
            } else {
              // For other array parameters, add multiple entries
              value.forEach((v) => searchParams.append(key, String(v)))
            }
          } else {
            searchParams.append(key, String(value))
          }
        }
      })
      const queryString = searchParams.toString()
      if (queryString) {
        url += `?${queryString}`
      }
    }

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session.access_token}`,
      ...options?.headers,
    }

    const response = await fetch(url, {
      ...options,
      headers,
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }

    const result = await response.json()
    
    // If the response has a data property, return it directly
    // Otherwise return the full response
    return result.data !== undefined ? result.data : result
  },

  get(path: string, params?: any) {
    return this.fetch(path, { method: 'GET', params })
  },

  post(path: string, data: any) {
    return this.fetch(path, {
      method: 'POST',
      body: JSON.stringify(data),
    })
  },

  patch(path: string, data: any) {
    return this.fetch(path, {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
  },

  put(path: string, data?: any) {
    return this.fetch(path, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    })
  },

  delete(path: string, data?: any) {
    return this.fetch(path, {
      method: 'DELETE',
      body: data ? JSON.stringify(data) : undefined,
    })
  },
}
