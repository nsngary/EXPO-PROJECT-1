import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from '@/components/StyledText'

const EventCheckIn = () => {
  return (
    <View style={styles.container}>
      <Text>簽到</Text>
    </View>
  )
}

export default EventCheckIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
