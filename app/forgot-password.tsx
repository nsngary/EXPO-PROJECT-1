import { StyleSheet, View } from 'react-native'
import { Text } from '@/components/StyledText'
import React from 'react'

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <Text>ForgotPassword Screen</Text>
    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})