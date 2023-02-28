import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface MainState {
  list: string[]
}

const initialState: MainState = {
  list: [],
}

const index = createSlice({
  name: 'main',
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<string>) => {
      state.list = [...state.list, action.payload]
    },
  },
})

export default index.reducer

export const { addList } = index.actions
