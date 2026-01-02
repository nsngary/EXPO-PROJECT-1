import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from '@/components/StyledText'

const TreePerformance = () => {
  return (
    <View style={styles.container}>
      <Text>樹狀業績查詢</Text>
    </View>
  )
}

export default TreePerformance

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
