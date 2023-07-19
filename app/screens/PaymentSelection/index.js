import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const PaymentSelection = () => {
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
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Payment Selection screen</Text>
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
});

export default PaymentSelection;
