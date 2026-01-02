import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { useSession } from '@/ctx'
import { Text } from '@/components/StyledText'

const Logout = () => {
  const { signOut } = useSession();
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text
      style={[
        styles.item,
        { backgroundColor: colors.card, borderColor: colors.border },
      ]}
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
  borderWidth: 0.01,
  borderRadius: 12,
  marginBottom: 10,
}
})
