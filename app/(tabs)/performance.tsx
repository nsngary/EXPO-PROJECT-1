import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Performance = () => {
  return (
    <View style={ styles.container}>
      <Text>Performance Screen</Text>
    </View>
  )
}

export default Performance

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})