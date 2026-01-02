import { Href, Link } from "expo-router";
import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Text } from "@/components/StyledText";

type Role = "general" | "vip" | "vic";

const roleOptions: { value: Role; label: string }[] = [
  { value: "general", label: "一般" },
  { value: "vip", label: "VIP" },
  { value: "vic", label: "VIC" },
];

const roleLabels: Record<Role, string> = {
  general: "一般",
  vip: "VIP",
  vic: "VIC",
};

type NavItem = {
  label: string;
  href: Href;
  visible?: boolean;
};

const MemberInfo = () => {
  const [role, setRole] = useState<Role>("general");
  const { colors } = useTheme();

  const navItems: NavItem[] = [
    { label: "VIP 資料", href: "/profile/vip-info", visible: role === "vip" },
    { label: "VIC 資料", href: "/profile/vic-info", visible: role === "vic" },
    { label: "表單中心", href: "/profile/form-center" },
    { label: "產品檢驗文件", href: "/profile/product-certificates" },
    { label: "見證體驗", href: "/profile/testimonials" },
    { label: "設定", href: "/profile/settings" },
    { label: "登出", href: "/profile/logout" },
  ] satisfies NavItem[];

  const visibleNavItems = navItems.filter((item) => item.visible ?? true);

  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={styles.container}
    >
      {/* <Text style={styles.title}>會員基本資料</Text> */}
      <Text style={[styles.subtitle, { color: colors.text, opacity: 0.6 }]}>
        角色切換
      </Text>
      <View style={[styles.segmented, { backgroundColor: colors.border }]}>
        {roleOptions.map((option) => {
          const isActive = role === option.value;
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
                  { color: colors.text, opacity: 0.6 },
                  isActive && [styles.segmentTextActive, { color: colors.text }],
                ]}
              >
                {option.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
      <Text style={[styles.subtitle, { color: colors.text, opacity: 0.6 }]}>
        功能入口
      </Text>
      <View>
        {visibleNavItems.map((item) => (
          <Link key={item.label} href={item.href} asChild>
            <Pressable
              style={[
                styles.item,
                { backgroundColor: colors.card, borderColor: colors.border },
              ]}
            >
              <Text style={[styles.itemText, { color: colors.text }]}>
                {item.label}
              </Text>
            </Pressable>
          </Link>
        ))}
      </View>
      <Text style={[styles.helper, { color: colors.text, opacity: 0.6 }]}>
        目前角色：{roleLabels[role]}
      </Text>
    </ScrollView>
  );
};

export default MemberInfo;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingBottom: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 12,
  },
  segmented: {
    flexDirection: "row",
    borderRadius: 999,
    padding: 4,
    marginBottom: 16,
  },
  segment: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
    borderRadius: 999,
  },
  segmentActive: {
  },
  segmentText: {
    fontSize: 13,
  },
  segmentTextActive: {
    fontWeight: "600",
  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 0.01,
    borderRadius: 12,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
  },
  helper: {
    marginTop: 8,
    fontSize: 12,
  },
});
