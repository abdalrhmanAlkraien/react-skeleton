import axiosInstance from './axiosInstance'

export const registerApi = (data) => {
  return axiosInstance.post('/auth/register', data)
}