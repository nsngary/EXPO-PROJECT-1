import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Purchase = () => {
  return (
    <View style={styles.container}>
      <Text>購買產品</Text>
    </View>
  )
}

export default Purchase

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})