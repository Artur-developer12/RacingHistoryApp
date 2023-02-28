import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from '@emotion/react'
import theme from 'config/theme'
import Routes from 'routes'
import { store, persistor } from 'strore'

const App = (): JSX.Element => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </PersistGate>
  </Provider>
)

export default App
