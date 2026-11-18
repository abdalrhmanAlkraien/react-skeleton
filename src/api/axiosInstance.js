
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Clerk token getter — registered by ClerkAxiosBridge
let clerkTokenGetter = null

export const setClerkTokenGetter = (getter) => {
  clerkTokenGetter = getter
}

// Request interceptor — attach Clerk JWT automatically
axiosInstance.interceptors.request.use(
  async (config) => {
    if (clerkTokenGetter) {
      const token = await clerkTokenGetter()

      if (token) {
        config.headers.set('Authorization', `Bearer ${token}`)
      }
    }

    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor — handle authentication errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn('API authentication failed:', error.config?.url)
    }

    return Promise.reject(error)
  }
)

export default axiosInstance
