import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { RadioButton } from "react-native-paper";
import { addDoc, collection } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const PaymentSelection = () => {
  const [checked, setChecked] = useState("stripe");

  const auth = getAuth();
  const navigation = useNavigation();
  const logout = async () => {
    try {
      let res = await signOut(auth);
      console.log("==>", res);
      navigation.navigate("Login");
    } catch (error) {
      console.log("err", error);
    }
  };
  const db = getFirestore();

  const pay = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        PmtSubId: "user's email",
        PmtSrvc: checked,
        ContactPermissionDtTm:
          "Contact Permission Date/Time - The time the Contact Permission was approved (on Registration)",
        PrivacyDtTm:
          "Privacy Date/Time - The Date/Time that the Privacy Policy was acknowledged (on Registration).",
        TOSDtTm:
          "Terms of Service Date/Time - The time the TOS was approved (on Registration)",
      });
    } catch (error) {
      console.log("err", error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>Stripe</Text>
        <RadioButton
          value="stripe"
          status={checked === "stripe" ? "checked" : "unchecked"}
          onPress={() => setChecked("stripe")}
        />
      </View>
      <View style={styles.row}>
        <Text>PayPal</Text>

        <RadioButton
          value="PayPal"
          status={checked === "PayPal" ? "checked" : "unchecked"}
          onPress={() => setChecked("PayPal")}
        />
      </View>

      <TouchableOpacity onPress={pay} style={styles.btn}>
        <Text style={styles.btnText}>Pay</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={logout} style={styles.btn}>
        <Text style={styles.btnText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
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
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default PaymentSelection;
