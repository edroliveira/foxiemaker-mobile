import { View } from "@/components/Themed";
import { StatusBar } from "expo-status-bar";
import { Platform, Text } from "react-native";

export default function StockScreen() {
  return (
    <View>
      <Text> Estoque </Text>
      <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
