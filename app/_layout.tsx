import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Theme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import "react-native-reanimated";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <ThemeProvider value={customTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: "fullScreenModal" }}
        />
        <Stack.Screen
          name="projects"
          options={{
            headerTitle: "PROJETOS",
            headerTitleStyle: styles.modalHeader,
            presentation: "fullScreenModal",
          }}
        />
        <Stack.Screen
          name="forms"
          options={{
            headerTitle: "FORMULÁRIOS",
            headerTitleStyle: styles.modalHeader,
            presentation: "fullScreenModal",
          }}
        />
        <Stack.Screen
          name="stock"
          options={{
            headerTitle: "ESTOQUE",
            headerTitleStyle: styles.modalHeader,
            presentation: "fullScreenModal",
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}

const customTheme: Theme = {
  dark: true,
  colors: {
    primary: "#D750C1",
    background: "#A78DB8",
    card: "#EBDCF4",
    text: "#6D4886",
    border: "rgba(0, 0, 0, 0)",
    notification: "rgb(255, 69, 58)",
  },
};

const styles = StyleSheet.create({
  modalHeader: {
    color: "#6D4886",
    fontSize: 26,
    fontFamily: "BigShouldersText-Regular",
  },
});
