import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import {
  NotoSansTC_400Regular,
  NotoSansTC_600SemiBold,
} from "@expo-google-fonts/noto-sans-tc";
import {
  NotoSerifTC_400Regular,
  NotoSerifTC_600SemiBold,
} from "@expo-google-fonts/noto-serif-tc";
import { SessionProvider, useSession } from "@/ctx";
import { SplashScreenController } from "@/splash";
import { useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
  useTheme,
} from "@react-navigation/native";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    NotoSansTC_400Regular,
    NotoSansTC_600SemiBold,
    NotoSerifTC_400Regular,
    NotoSerifTC_600SemiBold,
  });

  const scheme = useColorScheme();
  const isDark = scheme === "dark";

  const navTheme = {
    ...(isDark ? DarkTheme : DefaultTheme),
    colors: {
      ...(isDark ? DarkTheme.colors : DefaultTheme.colors),
      background: isDark ? Colors.dark.background : Colors.light.background,
      text: isDark ? Colors.dark.text : Colors.light.text,
      primary: isDark ? Colors.dark.primary : Colors.light.primary,
      border: isDark ? Colors.dark.border : Colors.light.border,
      card: isDark ? Colors.dark.card : Colors.light.card,
    },
  };

  return (
    <SessionProvider>
      <SplashScreenController fontsLoaded={fontsLoaded} />
      {fontsLoaded ? (
        <>
          <ThemeProvider value={navTheme}>
            <StatusBar
              style={isDark ? "light" : "dark"}
              backgroundColor={navTheme.colors.background}
              translucent
              hidden={false}
            />
            <RootNavigator />
          </ThemeProvider>
        </>
      ) : null}
    </SessionProvider>
  );
}

function RootNavigator() {
  const { session } = useSession();
  const { colors } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Protected guard={!!session}>
        <Stack.Screen name="(app)" />
      </Stack.Protected>

      <Stack.Protected guard={!session}>
        <Stack.Screen name="sign-in" />
        <Stack.Screen name="create-account" />
      </Stack.Protected>
    </Stack>
  );
}
