import { Href, Link } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Text } from "@/components/StyledText";

type NavItem = { label: string; href: Href };

const OnlineOrder = () => {
  const { colors } = useTheme();

  const navItems: NavItem[] = [
    { label: "消費紀錄", href: "/order/purchase-history" },
    { label: "產品購買", href: "/order/purchase" },
  ];
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* <Text style={styles.title}>線上訂購</Text> */}
      <Text style={[styles.subtitle, { color: colors.text, opacity: 0.6 }]}>
        快速前往
      </Text>
      <View>
        {navItems.map((item) => (
          <Link key={item.label} href={item.href} asChild>
            <Pressable style={[styles.item, { backgroundColor: colors.card }]}>
              <Text style={[styles.itemText, { color: colors.text }]}>
                {item.label}
              </Text>
            </Pressable>
          </Link>
        ))}
      </View>
    </View>
  );
};

export default OnlineOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
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
  item: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  itemText: {
    fontSize: 16,
  },
});
