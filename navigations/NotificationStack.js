import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NotificationScreen from "../screens/Notifications";

const Stack = createStackNavigator();

function NotificationStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Notifications" component={NotificationScreen} />
    </Stack.Navigator>
  );
}

export default NotificationStack;
