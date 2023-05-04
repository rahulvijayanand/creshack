import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavi from "./navigations/MainNavi";

export default function App() {
  return (
    <NavigationContainer>
      <MainNavi />
    </NavigationContainer>
  );
}