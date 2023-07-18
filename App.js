import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import NavigationComponent from "./app/navigation";
import AppContextProvider from "./app/context/contextProvider";
import "./app/Language/index";
export default function App() {
  return (
    <View style={styles.container}>
      <AppContextProvider>
        <NavigationComponent />
      </AppContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
