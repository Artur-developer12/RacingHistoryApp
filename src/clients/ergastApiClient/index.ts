import { createAxiosInstance } from 'clients'

const api = createAxiosInstance({ baseURL: 'https://ergast.com/api' })

export const getDrivers = async () => {
  const { data } = await api.get('/f1/drivers.json')
  return data
}
