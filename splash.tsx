import { useEffect } from "react";
import { SplashScreen } from "expo-router";
import { useSession } from "./ctx";

SplashScreen.preventAutoHideAsync();

export function SplashScreenController({ fontsLoaded }: { fontsLoaded: boolean }) {
  const { isLoading } = useSession();
  const ready = fontsLoaded && !isLoading;

  useEffect(() => {
    if (ready) {
      SplashScreen.hide();
    }
  }, [ready]);

  return null;
}
