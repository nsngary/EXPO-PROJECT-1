import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from "@/components/StyledText";

const createAccount = () => {
  return (
    <View style={styles.container}>
      <Text>createAccount Screen</Text>
    </View>
  )
}

export default createAccount

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})