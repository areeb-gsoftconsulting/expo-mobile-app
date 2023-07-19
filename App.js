import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import NavigationComponent from "./app/navigation";
import AppContextProvider from "./app/context/contextProvider";
import "./app/Language/index";
import "./firebaseConfig";
import { PaperProvider } from "react-native-paper";
export default function App() {
  return (
    <View style={styles.container}>
      <PaperProvider>
        <AppContextProvider>
          <NavigationComponent />
        </AppContextProvider>
      </PaperProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
