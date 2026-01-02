import { useState } from "react";
import { Pressable, StyleSheet, TextInput, View, useColorScheme } from "react-native";
import { router } from "expo-router";
import { Text } from "@/components/StyledText";
import { useSession } from "@/ctx";
import { Colors } from "@/constants/Colors";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useSession();
  const scheme = useColorScheme();
  const palette = scheme === "dark" ? Colors.dark : Colors.light;

  const onLogin = () => {
    signIn();
    router.replace("/");
  };

  return (
    <View style={[styles.container, { backgroundColor: palette.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: palette.text }]}>登入</Text>
        <Text style={[styles.subtitle, { color: palette.mutedText }]}>
          請輸入帳號資訊
        </Text>
      </View>

      <View>
        <Text style={[styles.label, { color: palette.mutedText }]}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
          placeholder="you@example.com"
          placeholderTextColor={palette.mutedText}
          style={[
            styles.input,
            {
              borderColor: palette.border,
              backgroundColor: palette.card,
              color: palette.text,
            },
          ]}
        />

        <Text style={[styles.label, { color: palette.mutedText }]}>
          Password
        </Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          textContentType="password"
          placeholder="Enter your password"
          placeholderTextColor={palette.mutedText}
          // placeholderFontFamily="NotoSerifTC-400Regular"
          style={[
            styles.input,
            {
              borderColor: palette.border,
              backgroundColor: palette.card,
              color: palette.text,
            },
          ]}
        />

        <Pressable
          accessibilityRole="button"
          style={[styles.button, { backgroundColor: palette.primary }]}
          onPress={onLogin}
        >
          <Text style={[styles.buttonText, { color: Colors.light.background }]}>
            Sign in
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 14,
    marginTop: 6,
  },
  label: {
    fontSize: 12,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 14,
  },
  button: {
    marginTop: 4,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
  },
});
