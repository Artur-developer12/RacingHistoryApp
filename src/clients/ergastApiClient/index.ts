import { createAxiosInstance } from 'clients'
import { FetchDriversResponce } from './types'

const api = createAxiosInstance({ baseURL: 'https://ergast.com/api' })

export const getDrivers = async () => {
  const { data } = await api.get<FetchDriversResponce>('/f1/drivers.json')
  return data
}
