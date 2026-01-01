import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import {
  NotoSansTC_400Regular,
  NotoSansTC_600SemiBold,
} from "@expo-google-fonts/noto-sans-tc";
import { 
  NotoSerifTC_400Regular, 
  NotoSerifTC_600SemiBold 
} from "@expo-google-fonts/noto-serif-tc";

// prevent the splah screen from auto-higing before asset loading is
void SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: "(auth)",
};

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    NotoSansTC_400Regular,
    NotoSansTC_600SemiBold,
    NotoSerifTC_400Regular,
    NotoSerifTC_600SemiBold,
  });

  useEffect(() => {
    if (loaded) {
      void SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      {/* <StatusBar style="auto" /> */}
      <StatusBar
        style="dark"
        backgroundColor="#ffffff"
        translucent={true}
        hidden={false}
      />

      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
