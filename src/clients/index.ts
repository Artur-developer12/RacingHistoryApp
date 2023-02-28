import axios, { AxiosRequestConfig } from 'axios'

export const createAxiosInstance = (config: AxiosRequestConfig) => axios.create({ timeout: 10000, ...config })
