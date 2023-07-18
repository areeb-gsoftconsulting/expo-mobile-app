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
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

export default function Register() {
  const { t, i18n } = useTranslation();
  const { language, setLanguage } = useContext(AppContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "", // Provide default value for the "Email" field
    },
  });

  const onSubmit = (data) => {
    console.log("data=>", data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.logo} resizeMode="contain" source={logo} />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.inputContainer}>
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
          {errors.email && (
            <Text style={styles.errorText}>{errors.email.message}</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
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
          {errors.password && (
            <Text style={styles.errorText}>{errors.password.message}</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
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
          {errors.confirmPassword && (
            <Text style={styles.errorText}>
              {errors.confirmPassword.message}
            </Text>
          )}
        </View>

        <TouchableOpacity style={styles.btn} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.btnText}>Signup</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Signup with Google</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
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
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  textInput: {
    borderRadius: 8,
    borderWidth: 1,
    width: "100%",
    padding: 5,
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
  errorText: {
    color: "red",
    marginTop: 5,
  },
  imageContainer: {
    flex: 0.3,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    flex: 0.7,
    width: "100%",
  },
});
