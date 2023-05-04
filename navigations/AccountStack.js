import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/Account";

const Stack = createStackNavigator();

function AccountStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Account" component={AccountScreen} />
    </Stack.Navigator>
  );
}

export default AccountStack;
