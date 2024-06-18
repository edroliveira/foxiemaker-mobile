import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";
import { SplashScreen } from "expo-router";
import { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import Colors from "@/constants/Colors";

export default function HomeScreen() {
  const [fontsLoaded, fontError] = useFonts({
    "Quicksand-Regular": require("../../assets/fonts/Quicksand-Regular.ttf"),
    "BigShouldersText-Regular": require("../../assets/fonts/BigShouldersText-Regular.ttf"),
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
    <ScrollView style={styles.container}>
      <Text style={styles.title}> Acesso rápido </Text>
      <View style={styles.gridWrapper}>
        <TouchableOpacity
          style={[styles.gridItem, { backgroundColor: Colors.pastel.green }]}
        >
          <Text style={styles.itemText}> PROJETOS ATIVOS </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.gridItem, { backgroundColor: Colors.pastel.pink }]}
        >
          <Text style={styles.itemText}> FORMULÁRIOS </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.gridWrapper}>
        <TouchableOpacity
          style={[styles.gridItem, { backgroundColor: Colors.pastel.orange }]}
        >
          <Text style={styles.itemText}> ESTOQUE </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.gridItem, { backgroundColor: Colors.pastel.blue }]}
        >
          <Text style={styles.itemText}> PROJETOS CONCLUÍDOS </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}> Notificações </Text>
      <View style={styles.notificationsWrapper}>
        <TouchableOpacity style={styles.notification}>
          <Text style={styles.notifText}> Notificação exemplo </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    paddingTop: 40,
  },
  title: {
    marginTop: 20,
    marginBottom: 5,
    fontSize: 18,
    fontFamily: "Quicksand-Regular",
  },
  gridWrapper: {
    marginTop: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  gridItem: {
    margin: 5,
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderRadius: 15,
    elevation: 4,
  },
  itemText: {
    color: "#6D4886",
    fontSize: 22,
    fontFamily: "BigShouldersText-Regular",
    textAlign: "center",
  },
  notificationsWrapper: {
    marginTop: 5,
    marginBottom: 40,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  notification: {
    width: "100%",
    marginBottom: 8,
    paddingHorizontal: 13,
    paddingVertical: 15,
    borderRadius: 15,
    backgroundColor: "#F6E9FF",
    elevation: 2,
  },
  notifText: {
    color: "#6D4886",
    fontSize: 16,
    textAlign: "left",
  },
});
