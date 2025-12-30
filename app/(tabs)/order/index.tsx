import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

const OnlineOrder = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>線上訂購</Text>
      <Text style={styles.subtitle}>快速前往</Text>
      <View>
        <Link href="/(tabs)/order/purchase-history" asChild>
          <Pressable style={styles.item}>
            <Text style={styles.itemText}>消費紀錄</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  )
}

export default OnlineOrder

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 12,
  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
  },
  itemText: {
    fontSize: 16,
    color: '#111827',
  },
})
