import axios, { AxiosInstance } from 'axios'
// ** Config
import authConfig from './auth'

// Define the base URL for API requests
// const baseURL = 'https://dev.tria.so'
// const baseURL = 'https://prod.tria.so'
const baseURL = 'https://node-js-jwt-auth.onrender.com'

// Create an instance of Axios with default configuration
const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${baseURL}/api`, // Base URL for all requests
  headers: {
    'Content-Type': 'application/json' //  Default content type
  }
})

// Add a request interceptor to include the access token in the headers
axiosInstance.interceptors.request.use(
  config => {
    const token = window.localStorage.getItem('accessToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// Add a response interceptor to handle 401 errors
axiosInstance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    console.log('error------------>', error)
    if (error.response && error.response.status === 401) {
      // Call your logout function here
      console.log('calling logout')
      window.localStorage.removeItem('userData')
      window.localStorage.removeItem(authConfig.storageTokenKeyName)
      window.location.reload()
      // router.push('/login')
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
