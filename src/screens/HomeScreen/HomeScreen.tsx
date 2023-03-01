import { FlatList } from 'react-native'
import React, { useEffect } from 'react'
import styled from '@emotion/native'
import { fetchDrivers } from 'store/slices/mainSlice'
import useAppDispatch from 'hooks/useAppDispatch'
import useAppSelector from 'hooks/useAppSelector'
import DriverItem from './components/DriverItem'

const Wrapper = styled.View`
  flex: 1;
  padding-top: 20px;
  background-color: ${({ theme }) => theme.colors.common.white};
`

const HomeScreen = () => {
  const { drivers, offset } = useAppSelector(state => state.main)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchDrivers({ offset: 0 }))
  }, [])

  const onEndReached = () => {
    dispatch(fetchDrivers({ offset: offset + 30 }))
  }

  return (
    <Wrapper>
      <FlatList
        data={drivers}
        onEndReached={onEndReached}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        keyExtractor={item => item.driverId}
        renderItem={({ item }) => <DriverItem item={item} />}
      />
    </Wrapper>
  )
}

export default HomeScreen
