import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

// Create an Axios client with a base URL and default timeout
const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000
})

// Set up response interceptors
client.interceptors.response.use(
  response => response,
  error => {
    const errorMessage = error.response?.data || 'An unexpected error occurred'
    return Promise.reject(new Error(errorMessage))
  }
)

// Request function with improved type safety
export const request = async <T = any>(
  options: AxiosRequestConfig
): Promise<T> => {
  try {
    // Make the request
    const response: AxiosResponse<T> = await client(options)
    return response.data
  } catch (error: any) {
    // Return rejected promise with an error message
    return Promise.reject(error.message || 'An error occurred')
  }
}
