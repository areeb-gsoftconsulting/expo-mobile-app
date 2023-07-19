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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  // password: Yup.string().required("Password is required"),
});

export default function ResetPassword() {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const { language, setLanguage } = useContext(AppContext);
  const [loginErr, setLoginErr] = useState("");
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
  console.log("loginErr", loginErr);

  const onSubmit = async (data) => {
    console.log("data=>", data);
    try {
      const auth = getAuth();

      let res = await sendPasswordResetEmail(auth, data.email, {
        android: {
          installApp: false,
          minimumVersion: "",
          packageName: "",
        },
        handleCodeInApp: true,
        ios: {
          bundleId: "",
        },
      });
      console.log("res==>", res);
    } catch (error) {
      console.log("err", error);

      setLoginErr("User Not Found");
    }
  };
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInWithGoogle = async () => {
    try {
      let res = await signInWithPopup(auth, provider);
      console.log("res==>", res);
    } catch (error) {
      console.log("error==>", error);
    }
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

        {/* <View style={styles.inputContainer}>
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
        </View> */}

        <TouchableOpacity style={styles.btn} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.btnText}>Reset</Text>
        </TouchableOpacity>

        {loginErr.length > 0 && (
          <Text style={styles.errorText}>{loginErr}</Text>
        )}

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text>Don't have an account? Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text>back to login</Text>
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