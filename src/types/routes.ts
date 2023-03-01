import { NavigationProp, RouteProp } from '@react-navigation/native'
import { DriversType } from 'clients/ergastApiClient/types'

export enum StackRouteNames {
  HOME = 'HOME',
  DRIVER = 'DRIVER',
}

export interface StackParamList {
  [StackRouteNames.HOME]: undefined
  [StackRouteNames.DRIVER]: { item: DriversType }
  [key: string]: any
}

export interface StackNavProp<T extends keyof StackParamList> {
  navigation: NavigationProp<StackParamList, T>
  route: RouteProp<StackParamList, T>
}

export type AppNavigation = NavigationProp<StackParamList>
