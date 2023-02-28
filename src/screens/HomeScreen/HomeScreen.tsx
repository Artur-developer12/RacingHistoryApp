import { Text } from 'react-native'
import React from 'react'
import styled from '@emotion/native'

const Wrapper = styled.View`
  flex: 1;
  background-color: gray;
`

const HomeScreen = () => (
  <Wrapper>
    <Text>HomeScreen</Text>
  </Wrapper>
)

export default HomeScreen
