import { Text } from 'react-native'
import React, { useEffect } from 'react'
import styled from '@emotion/native'
import { getDrivers } from 'clients/ergastApiClient'

const Wrapper = styled.View`
  flex: 1;
  background-color: gray;
`

const HomeScreen = () => {
  useEffect(() => {
    getDrivers()
      .then(data => console.log('data', data))
      .catch(e => console.log('e', e))
  }, [])
  return (
    <Wrapper>
      <Text>HomeScreen</Text>
    </Wrapper>
  )
}

export default HomeScreen
