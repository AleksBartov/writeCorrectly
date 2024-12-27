import { SplashScreen, Stack } from "expo-router";
import {
  useFonts,
  Nunito_500Medium,
  Nunito_800ExtraBold,
  Nunito_900Black,
} from "@expo-google-fonts/nunito";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createContext, useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

export const ThemeContext = createContext();

export default function RootLayout() {
  const [theme, setTheme] = useState("CLASS_1");
  let [fontsLoaded] = useFonts({
    Nunito_500Medium,
    Nunito_800ExtraBold,
    Nunito_900Black,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <GestureHandlerRootView>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen
            name="classes"
            options={{
              presentation: "modal",
              headerTitle: "",
              headerShadowVisible: true,
              headerStyle: { backgroundColor: "snow" },
            }}
          />
        </Stack>
      </GestureHandlerRootView>
    </ThemeContext.Provider>
  );
}
