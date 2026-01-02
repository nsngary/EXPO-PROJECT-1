import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FormCenter = () => {
  return (
    <View style={styles.container}>
      <Text>表單中心</Text>
    </View>
  )
}

export default FormCenter

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
