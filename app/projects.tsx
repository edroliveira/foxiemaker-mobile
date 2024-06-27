import { View } from "@/components/Themed";
import { useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform, Text } from "react-native";

export default function ProjectsScreen() {
//   const glob = useGlobalSearchParams<{ projectType: string }>();
  const local = useLocalSearchParams<{ projectType: string }>();

  return (
    <View>
      <Text> Projetos {local.projectType} </Text>
      <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
