import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { Text } from '@/components/StyledText'

type Role = 'general' | 'vip' | 'vic'
type Scope = 'general' | 'vip' | 'vic'

const roleOptions: Array<{ value: Role; label: string }> = [
  { value: 'general', label: '一般' },
  { value: 'vip', label: 'VIP' },
  { value: 'vic', label: 'VIC' },
]

const roleLabels: Record<Role, string> = {
  general: '一般',
  vip: 'VIP',
  vic: 'VIC',
}

const scopeLabels: Record<Scope, string> = {
  general: '一般',
  vip: 'VIP',
  vic: 'VIC',
}

const scopesByRole: Record<Role, Scope[]> = {
  general: ['general'],
  vic: ['vic', 'general'],
  vip: ['vip', 'vic', 'general'],
}

const PurchaseHistory = () => {
  const [role, setRole] = useState<Role>('general')
  const availableScopes = scopesByRole[role]
  const [scope, setScope] = useState<Scope>(availableScopes[0])
  const { colors } = useTheme()
  const mutedTextStyle = { color: colors.text, opacity: 0.6 }

  useEffect(() => {
    setScope(scopesByRole[role][0])
  }, [role])

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={styles.title}>消費紀錄</Text>
      <Text style={[styles.subtitle, mutedTextStyle]}>角色切換</Text>
      <View style={[styles.segmented, { backgroundColor: colors.border }]}>
        {roleOptions.map((option) => {
          const isActive = role === option.value
          return (
            <Pressable
              key={option.value}
              onPress={() => setRole(option.value)}
              style={[
                styles.segment,
                isActive && [styles.segmentActive, { backgroundColor: colors.card }],
              ]}
            >
              <Text
                style={[
                  styles.segmentText,
                  mutedTextStyle,
                  isActive && [styles.segmentTextActive, { color: colors.text }],
                ]}
              >
                {option.label}
              </Text>
            </Pressable>
          )
        })}
      </View>
      <Text style={[styles.subtitle, mutedTextStyle]}>可見範圍</Text>
      <View style={[styles.segmented, { backgroundColor: colors.border }]}>
        {availableScopes.map((scopeOption) => {
          const isActive = scope === scopeOption
          return (
            <Pressable
              key={scopeOption}
              onPress={() => setScope(scopeOption)}
              style={[
                styles.segment,
                isActive && [styles.segmentActive, { backgroundColor: colors.card }],
              ]}
            >
              <Text
                style={[
                  styles.segmentText,
                  mutedTextStyle,
                  isActive && [styles.segmentTextActive, { color: colors.text }],
                ]}
              >
                {scopeLabels[scopeOption]}
              </Text>
            </Pressable>
          )
        })}
      </View>
      <View style={styles.summary}>
        <Text style={[styles.summaryText, mutedTextStyle]}>
          目前角色：{roleLabels[role]}
        </Text>
        <Text style={[styles.summaryText, mutedTextStyle]}>
          顯示範圍：{scopeLabels[scope]}
        </Text>
      </View>
    </View>
  )
}

export default PurchaseHistory

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
    marginBottom: 12,
  },
  segmented: {
    flexDirection: 'row',
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
  },
  segmentText: {
    fontSize: 13,
  },
  segmentTextActive: {
    fontWeight: '600',
  },
  summary: {
    marginTop: 8,
  },
  summaryText: {
    fontSize: 12,
    marginBottom: 4,
  },
})
