import { ConfigureStoreOptions, configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import reactotron from 'lib/reactotron'
import { rootReducer } from './rootReducer'

const defaultMiddlewares = {
  serializableCheck: false,
  immutableCheck: false,
  thunk: true,
}

const options: ConfigureStoreOptions = {
  reducer: rootReducer,
  middleware: getDefaultMiddlewares => getDefaultMiddlewares(defaultMiddlewares),
  enhancers: reactotron?.createEnhancer ? [reactotron.createEnhancer()] : [],
}

export const store = configureStore(options)
export const persistor = persistStore(store)
