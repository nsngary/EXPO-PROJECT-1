import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';

// prevent the splah screen from auto-higing before asset loading is 
void SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {  
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  });

  useEffect(() => {
    if (loaded) {
      void SplashScreen.hideAsync();
    }
  },[loaded]);
  
  if (!loaded) {
    return null;
  }

  return (
    <>
      {/* <StatusBar style="auto" /> */}
      <StatusBar style="dark" backgroundColor="#ffffff" translucent={true} hidden={false} />

      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
