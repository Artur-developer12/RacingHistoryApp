import { Text } from 'react-native'
import React, { useEffect } from 'react'
import styled from '@emotion/native'
import { fetchDrivers } from 'store/slices/mainSlice'
import useAppDispatch from 'hooks/useAppDispatch'

const Wrapper = styled.View`
  flex: 1;
  background-color: gray;
`

const HomeScreen = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchDrivers())
  }, [])
  return (
    <Wrapper>
      <Text>HomeScreen</Text>
    </Wrapper>
  )
}

export default HomeScreen
