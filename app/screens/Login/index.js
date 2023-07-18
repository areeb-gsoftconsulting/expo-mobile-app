import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import AppContext from "../../context/appContext";
import logo from "../../../assets/logo.png";

export default function Login() {
  const { t, i18n } = useTranslation();
  const { language, setLanguage } = useContext(AppContext);
  return (
    <View style={styles.container}>
      <Image style={styles.logo} resizeMode="contain" source={logo} />
      <TextInput style={styles.textInput} placeholder="Email" />
      <TextInput style={styles.textInput} placeholder="password" />
      <TextInput style={styles.textInput} placeholder="confirm password" />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>signup with google</Text>
      </TouchableOpacity>
      {/* 
      <Button
        title="login"
        onPress={() => {
          i18n.changeLanguage(i18n.language == "en" ? "fr" : "en");
        }}
      ></Button> */}
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
    paddingHorizontal: 40,
  },
  logo: {
    height: 90,
    width: 90,
  },
  textInput: {
    borderRadius: 8,
    borderWidth: 1,
    width: "100%",
    padding: 5,
    marginTop: 20,
  },
  btn: {
    marginTop: 20,
    backgroundColor: "blue",
    minWidth: "30%",
    padding: 8,
    borderRadius: 8,
  },
  btnText: {
    textAlign: "center",
    color: "white",
  },
});
