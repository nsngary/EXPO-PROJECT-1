import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

const PerformanceQuery = () => {
  const navItems = [
    { label: '樹狀業績查詢', href: '/(tabs)/performance/tree-performance' },
    { label: '獎金明細', href: '/(tabs)/performance/bonus-details' },
  ] as const

  return (
    <View style={styles.container}>
      <Text style={styles.title}>業績查詢</Text>
      <Text style={styles.subtitle}>快速前往</Text>
      <View>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} asChild>
            <Pressable style={styles.item}>
              <Text style={styles.itemText}>{item.label}</Text>
            </Pressable>
          </Link>
        ))}
      </View>
    </View>
  )
}

export default PerformanceQuery

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
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    color: '#111827',
  },
})
