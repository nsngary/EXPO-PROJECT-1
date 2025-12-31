import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DailyCheckIn = () => {
  return (
    <View style={styles.container}>
      <Text>每日簽到</Text>
    </View>
  )
}

export default DailyCheckIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
