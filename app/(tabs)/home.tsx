import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";
import { SplashScreen, router, useNavigation } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import Colors from "@/constants/Colors";

export default function HomeScreen() {
  const navigation = useNavigation();

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

  const navigateTo = (route: string) => {
    router.navigate(route);
  };

  const navigateToProjects = (route: string, projectType: string) => {
    router.navigate({ pathname: route, params: { projectType: projectType } });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}> ACESSO RÁPIDO </Text>
      <View style={styles.gridWrapper}>
        <TouchableOpacity
          style={[styles.gridItem, { backgroundColor: Colors.pastel.green }]}
          onPress={() => navigateToProjects("/projects", "ATIVOS")}
        >
          <Text style={styles.itemText}> PROJETOS ATIVOS </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.gridItem, { backgroundColor: Colors.pastel.pink }]}
          onPress={() => navigateTo("/forms")}
        >
          <Text style={styles.itemText}> FORMULÁRIOS </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.gridWrapper}>
        <TouchableOpacity
          style={[styles.gridItem, { backgroundColor: Colors.pastel.orange }]}
          onPress={() => navigateTo("/stock")}
        >
          <Text style={styles.itemText}> ESTOQUE </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.gridItem, { backgroundColor: Colors.pastel.blue }]}
          onPress={() => navigateToProjects("/projects", "CONCLUÍDOS")}
        >
          <Text style={styles.itemText}> PROJETOS CONCLUÍDOS </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}> NOTIFICAÇÕES </Text>
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
    fontSize: 16,
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
