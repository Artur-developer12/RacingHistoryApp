import AsyncStorage from '@react-native-async-storage/async-storage'
import { Reducer } from '@reduxjs/toolkit'
import { persistCombineReducers } from 'redux-persist'
import mainSlice from './slices/mainSlice'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [''],
  version: 0,
  blacklist: [''],
}

const persistedCombinedReducer = persistCombineReducers(persistConfig, {
  main: mainSlice,
})

export const rootReducer: Reducer = (state: RootState, action) => persistedCombinedReducer(state, action)

export type RootState = ReturnType<typeof persistedCombinedReducer>
