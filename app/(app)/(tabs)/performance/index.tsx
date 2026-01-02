import { Link } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Text } from "@/components/StyledText";

const PerformanceQuery = () => {
  const { colors } = useTheme();

  const navItems = [
    { label: "樹狀業績查詢", href: "/performance/tree-performance" },
    { label: "獎金明細", href: "/performance/bonus-details" },
  ] as const;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* <Text style={styles.title}>業績查詢</Text> */}
      <Text style={[styles.subtitle, { color: colors.text, opacity: 0.6 }]}>
        快速前往
      </Text>
      <View>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} asChild>
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

export default PerformanceQuery;

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
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
  },
});
