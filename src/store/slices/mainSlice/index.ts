import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getDrivers } from 'clients/ergastApiClient'
import { DriversType, FetchDriversResponce } from 'clients/ergastApiClient/types'

interface MainState {
  drivers: DriversType[]
}

const initialState: MainState = {
  drivers: [],
}

export const fetchDrivers = createAsyncThunk<FetchDriversResponce, undefined>('main/fetchDrivers', async () => {
  const data = await getDrivers()

  return data
})

const index = createSlice({
  name: 'main',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchDrivers.fulfilled, (state, action) => {
      const { MRData } = action.payload

      state.drivers = MRData.DriverTable.Drivers
    })
  },
})

export default index.reducer
