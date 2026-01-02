import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useSession } from '@/ctx'
import { Text } from '@/components/StyledText'

const Logout = () => {
  const { signOut } = useSession();
  return (
    <View style={styles.container}>
      <Text
      style={styles.item}
      onPress={() => {
        signOut();
      }}>
      登出
      </Text>
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
  item: {
  paddingVertical: 12,
  paddingHorizontal: 16,
  backgroundColor: "#EEF2FF",
  borderColor: "#6B85C2",
  borderWidth: 0.01,
  borderRadius: 12,
  marginBottom: 10,
}
})
