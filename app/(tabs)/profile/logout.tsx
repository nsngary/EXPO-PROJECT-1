import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Logout = () => {
  return (
    <View style={styles.container}>
      <Text>登出</Text>
    </View>
  )
}

export default Logout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
