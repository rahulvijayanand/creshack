import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "../fonts/Text";

function AccountScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1e1e1e",
      }}
    >
      <Text style={{ color: "white" }}>Account!</Text>
    </View>
  );
}

export default AccountScreen;

const styles = StyleSheet.create({});
