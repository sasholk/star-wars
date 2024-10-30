import { request } from './api.client'

class BaseService {
  protected async get<T>(url: string): Promise<T> {
    try {
      return await request<T>({ method: 'GET', url })
    } catch (error) {
      // Centralized error handling
      console.error(`Error fetching from ${url}:`, error)
      throw error
    }
  }

  protected buildQuery(
    params: Record<string, string | number | undefined>
  ): string {
    return Object.entries(params)
      .filter(([, value]) => value !== undefined && value !== '')
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value!)}`
      )
      .join('&')
  }
}

export default BaseService
