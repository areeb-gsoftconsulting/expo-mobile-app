import { View, Text, StyleSheet } from "react-native";
import Login from "../Login";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    paddingHorizontal: 40,
  },
});

export default Home;
