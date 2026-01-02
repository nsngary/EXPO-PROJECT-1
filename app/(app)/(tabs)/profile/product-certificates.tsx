import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ProductCertificates = () => {
  return (
    <View style={styles.container}>
      <Text>產品檢驗文件</Text>
    </View>
  )
}

export default ProductCertificates

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
