import axiosInstance from './axiosInstance'

export const getProfileApi = () => {
  return axiosInstance.get('/auth/me')
}

export const updateProfileApi = (data) => {
  return axiosInstance.put('/profile/me', data)
}