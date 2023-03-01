import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getDrivers } from 'clients/ergastApiClient'
import { DriversType, FetchDriversResponce } from 'clients/ergastApiClient/types'
import { RequestFilterType } from 'types'

interface MainState {
  drivers: DriversType[]
  offset: number
}

const initialState: MainState = {
  drivers: [],
  offset: 0,
}

export const fetchDrivers = createAsyncThunk<{ driversData: FetchDriversResponce; offset: number }, RequestFilterType>(
  'main/fetchDrivers',
  async ({ offset }) => {
    const data = await getDrivers({ offset })

    return {
      driversData: data,
      offset,
    }
  },
)

const index = createSlice({
  name: 'main',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchDrivers.fulfilled, (state, action) => {
      const { driversData, offset } = action.payload

      if (offset === 0) {
        state.drivers = driversData.MRData.DriverTable.Drivers
        state.offset = offset

        return
      }
      if (state.offset !== offset) {
        state.drivers = [...state.drivers, ...driversData.MRData.DriverTable.Drivers]
        state.offset = offset
      }
    })
  },
})

export default index.reducer
