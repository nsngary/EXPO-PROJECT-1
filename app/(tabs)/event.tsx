import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Event = () => {
  return (
    <View style={styles.container}>
      <Text>Event Screen</Text>
    </View>
  )
}

export default Event

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'

    }
})