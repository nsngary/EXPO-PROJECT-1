import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BonusDetails = () => {
  return (
    <View style={styles.container}>
      <Text>獎金明細</Text>
    </View>
  )
}

export default BonusDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
