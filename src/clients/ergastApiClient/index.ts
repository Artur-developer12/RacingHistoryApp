import { createAxiosInstance } from 'clients'
import { RequestFilterType } from 'types'
import { FetchDriversResponce } from './types'

const api = createAxiosInstance({ baseURL: 'https://ergast.com/api' })

export const getDrivers = async ({ offset }: RequestFilterType) => {
  const { data } = await api.get<FetchDriversResponce>('/f1/drivers.json', {
    params: {
      limit: 30,
      offset,
    },
  })
  return data
}
