import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

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
