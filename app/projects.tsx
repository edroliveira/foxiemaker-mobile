import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export default function ProjectsScreen() {
  const localParams = useLocalSearchParams<{ projectType: string }>();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}> PROJETOS {localParams.projectType} </Text>

      <TouchableOpacity style={styles.projectCard}>
        <Text> PROJETO EXEMPLO </Text>
      </TouchableOpacity>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    paddingTop: 10,
  },
  title: {
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 10,
    fontSize: 16,
    fontFamily: "Quicksand-Regular",
    color: "#F6E9FF",
  },
  projectCard: {
    marginTop: 10,
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 15,
    backgroundColor: "#F6E9FF",
    elevation: 2,
  },
});
