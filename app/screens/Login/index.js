import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
export default function Login() {
  const { t, i18n } = useTranslation();
  return (
    <View style={styles.container}>
      <Text>My Login Screen {t("name")}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
