import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const VipInfo = () => {
  return (
    <View style={styles.container}>
      <Text>VIP 資料</Text>
    </View>
  )
}

export default VipInfo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
