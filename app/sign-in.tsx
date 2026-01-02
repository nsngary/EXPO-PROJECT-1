import { useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { router } from "expo-router";
import { Text } from "@/components/StyledText";
import { useSession } from "@/ctx";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useSession();

  const onLogin = () => {
    signIn();
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>登入</Text>
        <Text style={styles.subtitle}>請輸入帳號資訊</Text>
      </View>

      <View>
        <Text style={styles.label}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
          placeholder="you@example.com"
          placeholderTextColor="#9ca3af"
          style={styles.input}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          textContentType="password"
          placeholder="Enter your password"
          placeholderTextColor="#9ca3af"
          // placeholderFontFamily="NotoSerifTC-400Regular"
          style={styles.input}
        />

        <Pressable
          accessibilityRole="button"
          style={styles.button}
          onPress={onLogin}
        >
          <Text style={styles.buttonText}>Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
  },
  subtitle: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: 6,
  },
  label: {
    fontSize: 12,
    color: "#6b7280",
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: "#f9fafb",
    color: "#111827",
    marginBottom: 14,
  },
  button: {
    marginTop: 4,
    backgroundColor: "#111827",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
