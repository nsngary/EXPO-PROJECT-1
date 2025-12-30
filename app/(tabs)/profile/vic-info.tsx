import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const VicInfo = () => {
  return (
    <View style={styles.container}>
      <Text>VIC 資料</Text>
    </View>
  )
}

export default VicInfo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
