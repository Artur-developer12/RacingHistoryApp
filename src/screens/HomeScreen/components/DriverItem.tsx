import { Text } from 'react-native'
import React, { FC } from 'react'
import styled from '@emotion/native'
import { DriversType } from 'clients/ergastApiClient/types'
import useAppNavigation from 'hooks/useAppNavigate'
import { StackRouteNames } from 'types'

const Wrapper = styled.TouchableOpacity`
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.background.gray};
  border-radius: 10px;
`

interface Props {
  item: DriversType
}

const DriverItem: FC<Props> = ({ item }) => {
  const navigation = useAppNavigation()

  const handlePress = () => {
    navigation.navigate(StackRouteNames.DRIVER, { item })
  }
  return (
    <Wrapper
      onPress={handlePress}
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <Text>{item.familyName}</Text>
      <Text>{item.givenName}</Text>
    </Wrapper>
  )
}

export default DriverItem
