import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from "@/components/StyledText";

const NotFount = () => {
  return (
    <View style={styles.container}>
      <Text>Not Found</Text>
    </View>
  )
}

export default NotFount

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
