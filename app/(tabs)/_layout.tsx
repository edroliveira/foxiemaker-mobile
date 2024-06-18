import React, { useCallback } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, SplashScreen, Tabs } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { useFonts } from "expo-font";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded, fontError] = useFonts({
    'PlaywritePL-Regular': require('../../assets/fonts/PlaywritePL-Regular.ttf'),
  });

  useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        tabBarStyle: styles.floatingNavTab
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Início",
          headerTitle: "Foxiemaker",
          headerTitleAlign: "center",
          headerTitleStyle: styles.title,
          headerStyle: styles.headerTab,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Novo",
          headerStyle: styles.headerTab,
          tabBarIcon: ({ color }) => <TabBarIcon name="plus-square" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Opções",
          headerStyle: styles.headerTab,
          tabBarIcon: ({ color }) => <TabBarIcon name="gear" color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  floatingNavTab: {
    height: 70,
    paddingBottom: 10,
    margin: 10,
    // marginBottom: 20,
    borderRadius: 20,
    // backgroundColor: 'red'
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  headerTab: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  title: {
    color: "white",
    fontFamily: 'PlaywritePL-Regular',
    fontSize: 35
  }
});
