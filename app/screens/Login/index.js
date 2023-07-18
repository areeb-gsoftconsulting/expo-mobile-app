import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import AppContext from "../../context/appContext";
export default function Login() {
  const { t, i18n } = useTranslation();
  const { language, setLanguage } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text>
        My Login Screen {language} {t("name")}
      </Text>
      <Button
        title="login"
        onPress={() => {
          setLanguage("boy");
        }}
      ></Button>
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
