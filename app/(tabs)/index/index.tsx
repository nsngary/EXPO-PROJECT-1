import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { Link, Href } from 'expo-router'
import { Text } from '../../../components/StyledText'

type NavItem = { label: string; href: Href }

const Home = () => {
  const navItems: NavItem[] = [
    { label: '禮物箱', href: '/index/gift-box' },
    { label: '每日簽到', href: '/index/daily-check-in' },
  ]

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>最新消息</Text> */}
      <Text style={styles.subtitle}>快速前往</Text>
      <View>
        {navItems.map((item) => (
          <Link key={item.href.toString()} href={item.href} asChild>
            <Pressable style={styles.item}>
              <Text style={styles.itemText}>{item.label}</Text>
            </Pressable>
          </Link>
        ))}
      </View>
    </View>
  )
}

export default Home

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
