import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from '@/components/StyledText'

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
