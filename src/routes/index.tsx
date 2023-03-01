import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StackRouteNames } from 'types'
import DriverScreen from 'screens/DriverScreen/DriverScreen'
import HomeScreen from '../screens/HomeScreen/HomeScreen'

const Stack = createNativeStackNavigator()

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={StackRouteNames.HOME} component={HomeScreen} />
      <Stack.Screen
        name={StackRouteNames.DRIVER}
        component={DriverScreen}
        options={({ route }) => ({
          title: route.params?.title,
        })}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Routes
