import React, { useRef } from "react";
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import plus from "../assets/plus.png";
import HomeStack from "./HomeStack";
import AccountStack from "./AccountStack";
import ProductStack from "./NotificationStack";
import SettingsStack from "./SettingsStack";
import Show from "../components/Bottom";

const Tab = createBottomTabNavigator();

export default function Navigation({ navigation }) {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  function getWidth() {
    let width = Dimensions.get("window").width;
    width = width - 130;
    return width / 2;
  }

  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            backgroundColor: "white",
            position: "absolute",
            bottom: 30,
            marginHorizontal: 70,
            height: 60,
            borderRadius: 50,
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10,
            },
            paddingHorizontal: 20,
          },
        }}
      >
        <Tab.Screen
          name={"HomeStack"}
          component={HomeStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: "absolute",
                  top: 15,
                }}
              >
                <FontAwesome5
                  name="home"
                  size={25}
                  color={focused ? "red" : "gray"}
                ></FontAwesome5>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>

        <Tab.Screen
          name={"ActionButton"}
          component={AccountStack}
          options={{
            tabBarIcon: ({ focused }) => <Show navigation={navigation} />,
          }}
        ></Tab.Screen>

        <Tab.Screen
          name={"AccountStack"}
          component={AccountStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: "absolute",
                  top: 15,
                }}
              >
                <FontAwesome5
                  name="user-alt"
                  size={25}
                  color={focused ? "red" : "gray"}
                ></FontAwesome5>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 1.08,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>
      </Tab.Navigator>

      <Animated.View
        style={{
          width: getWidth() - 80,
          height: 2,
          backgroundColor: "red",
          position: "absolute",
          bottom: 88,
          left: 100,
          borderRadius: 20,
          transform: [{ translateX: tabOffsetValue }],
        }}
      ></Animated.View>
    </>
  );
}
