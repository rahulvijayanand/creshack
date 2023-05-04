import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "../fonts/Text";

function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1e1e1e",
      }}
    >
      <Text style={{ color: "white" }}>Home!</Text>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({});
