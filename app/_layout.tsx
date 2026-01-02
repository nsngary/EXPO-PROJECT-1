import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import { NotoSansTC_400Regular, NotoSansTC_600SemiBold, } from "@expo-google-fonts/noto-sans-tc";
import { NotoSerifTC_400Regular, NotoSerifTC_600SemiBold, } from "@expo-google-fonts/noto-serif-tc";
import { SessionProvider, useSession } from "@/ctx";
import { SplashScreenController } from "@/splash";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    NotoSansTC_400Regular,
    NotoSansTC_600SemiBold,
    NotoSerifTC_400Regular,
    NotoSerifTC_600SemiBold,
  });

  return (
    <SessionProvider>
      <SplashScreenController fontsLoaded={fontsLoaded} />
      {fontsLoaded ? (
        <>
          {/* <StatusBar style="auto" /> */}
          <StatusBar
            style="dark"
            backgroundColor="#ffffff"
            translucent
            hidden={false}
          />
          <RootNavigator />
        </>
      ) : null}
    </SessionProvider>
  );
}

function RootNavigator() {
  const { session } = useSession();

  return (
    <Stack screenOptions={{ headerShown: false }}>
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
