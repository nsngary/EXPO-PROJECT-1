import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const GiftBox = () => {
  return (
    <View style={styles.container}>
      <Text>禮物箱</Text>
    </View>
  )
}

export default GiftBox

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
