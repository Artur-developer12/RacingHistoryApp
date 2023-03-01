import React from 'react'
import { Linking, TouchableOpacity } from 'react-native'
import styled from '@emotion/native'
import { StackNavProp, StackRouteNames } from 'types'

const Wrapper = styled.View`
  flex: 1;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.common.white};
`

const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
`

const Text = styled.Text<{ isLink?: boolean }>`
  margin-bottom: 10px;
  font-size: 14px;
  color: ${({ theme, isLink }) => (isLink ? theme.colors.common.link : theme.colors.common.black)};
`

const DriverScreen = ({ route }: StackNavProp<StackRouteNames.DRIVER>) => {
  const { item } = route.params

  const handleLink = () => {
    Linking.openURL(item.url)
  }

  return (
    <Wrapper>
      <Title>
        {item.givenName} {item.familyName}
      </Title>
      <Text>Date of Birth: {item.dateOfBirth}</Text>
      <Text>nationality: {item.nationality}</Text>
      <TouchableOpacity onPress={handleLink}>
        <Text isLink>wikipedia:{item.url}</Text>
      </TouchableOpacity>
    </Wrapper>
  )
}

export default DriverScreen
