import axios, { AxiosInstance } from 'axios'

const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://pet-shop.buckhill.com.hr/api/v1',
  headers: {
    'Content-type': 'application/json'
  }
})

export default apiClient
