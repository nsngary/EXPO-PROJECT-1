import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from '@/components/StyledText'

const EventSignup = () => {
  return (
    <View style={styles.container}>
      <Text>活動報名</Text>
    </View>
  )
}

export default EventSignup

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
