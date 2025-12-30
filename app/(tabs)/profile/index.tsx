import React, { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Link, Href } from 'expo-router'

type Role = 'general' | 'vip' | 'vic'

const roleOptions: { value: Role; label: string; }[] = [
  { value: 'general', label: '一般' },
  { value: 'vip', label: 'VIP' },
  { value: 'vic', label: 'VIC' },
]

const roleLabels: Record<Role, string> = {
  general: '一般',
  vip: 'VIP',
  vic: 'VIC',
}

const MemberInfo = () => {
  const [role, setRole] = useState<Role>('general')

  const navItems = [
    { label: 'VIP 資料', href: '/(tabs)/profile/vip-info', visible: role === 'vip' },
    { label: 'VIC 資料', href: '/(tabs)/profile/vic-info', visible: role === 'vic' },
    { label: '表單中心', href: '/(tabs)/profile/form-center' },
    { label: '產品檢驗文件', href: '/(tabs)/profile/product-certificates' },
    { label: '見證體驗', href: '/(tabs)/profile/testimonials' },
    { label: '設定', href: '/(tabs)/profile/settings' },
    { label: '登出', href: '/(tabs)/profile/logout' },
  ].filter((item) => item.visible ?? true)

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>會員基本資料</Text>
      <Text style={styles.subtitle}>角色切換</Text>
      <View style={styles.segmented}>
        {roleOptions.map((option) => {
          const isActive = role === option.value
          return (
            <Pressable
              key={option.value}
              onPress={() => setRole(option.value)}
              style={[styles.segment, isActive && styles.segmentActive]}
            >
              <Text
                style={[styles.segmentText, isActive && styles.segmentTextActive]}
              >
                {option.label}
              </Text>
            </Pressable>
          )
        })}
      </View>
      <Text style={styles.subtitle}>功能入口</Text>
      <View>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} asChild>
            <Pressable style={styles.item}>
              <Text style={styles.itemText}>{item.label}</Text>
            </Pressable>
          </Link>
        ))}
      </View>
      <Text style={styles.helper}>目前角色：{roleLabels[role]}</Text>
    </ScrollView>
  )
}

export default MemberInfo

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingBottom: 40,
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
  segmented: {
    flexDirection: 'row',
    backgroundColor: '#e5e7eb',
    borderRadius: 999,
    padding: 4,
    marginBottom: 16,
  },
  segment: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 999,
  },
  segmentActive: {
    backgroundColor: '#ffffff',
  },
  segmentText: {
    fontSize: 13,
    color: '#6b7280',
  },
  segmentTextActive: {
    color: '#111827',
    fontWeight: '600',
  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#EEF2FF',
    borderColor: '#6B85C2',
    borderWidth: 0.01,
    borderRadius: 12,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    color: '#111827',
  },
  helper: {
    marginTop: 8,
    fontSize: 12,
    color: '#6b7280',
  },
})
