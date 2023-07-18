import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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
import { useForm, Controller } from "react-hook-form";

export default function Register() {
  const { t, i18n } = useTranslation();
  const { language, setLanguage } = useContext(AppContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      email: "", // Provide default value for the "Email" field
    },
  });

  const [passwordError, setPasswordError] = useState("");

  const onSubmit = (data) => {
    if (!data.email) {
      // Check if the email field is empty
      setPasswordError("Email is required");
    } else if (!data.password) {
      // Check if the password field is empty
      setPasswordError("Password is required");
    } else if (data.password !== data.confirmPassword) {
      // Check if passwords match
      setPasswordError("Passwords must match");
    } else {
      setPasswordError("");
      console.log(data); // Do whatever you want with the form data
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} resizeMode="contain" source={logo} />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
        defaultValue=""
      />
      {errors.email && <Text>{errors.email.message}</Text>}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
        name="password"
        defaultValue=""
      />
      {errors.password && <Text>{errors.password.message}</Text>}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.textInput}
            placeholder="Confirm Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
        name="confirmPassword"
        defaultValue=""
      />
      {passwordError ? <Text>{passwordError}</Text> : null}
      <TouchableOpacity style={styles.btn} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.btnText}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Signup with Google</Text>
      </TouchableOpacity>
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
