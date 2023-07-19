import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../screens/Register";
import Login from "../screens/Login";
import ResetPassword from "../screens/ResetPassword";
import Home from "../screens/Home";
import PromoScreen1 from "../screens/PromoScreen1";
import PaymentSelection from "../screens/PaymentSelection";

const Stack = createNativeStackNavigator();
function NavigationComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PaymentSelection">
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PromoScreen1" component={PromoScreen1} />
        <Stack.Screen name="PaymentSelection" component={PaymentSelection} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationComponent;
