import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Navigation from "./BottomTabNavigation";

const Stack = createStackNavigator();

function MainNavi() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Navigation" component={Navigation} />
    </Stack.Navigator>
  );
}

export default MainNavi;
