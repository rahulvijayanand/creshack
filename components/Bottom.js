import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { BottomSheet } from "react-native-btr";
import { Feather, FontAwesome } from "@expo/vector-icons";
import plus from "../assets/plus.png";

const Show = ({ navigation }) => {
  const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleBottomNavigationView}>
        <View
          style={{
            width: 65,
            height: 65,
            backgroundColor: "red",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: Platform.OS == "android" ? 40 : 30,
          }}
        >
          <Image
            source={plus}
            style={{
              width: 22,
              height: 22,
              tintColor: "white",
            }}
          ></Image>
        </View>
      </TouchableOpacity>
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}
      >
        <View
          style={{
            backgroundColor: "#383838",
            width: "100%",
            height: "20%",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        >
          <View
            style={{
              flex: 1,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                width: 55,
                height: 5,
                borderRadius: 10,
                alignSelf: "center",
                marginTop: 10,
              }}
            />
            <View
              style={{
                flex: 1,
                marginVertical: 20,
              }}
            >
              <TouchableOpacity
                activeOpacity={0.5}
                style={{ flexDirection: "row", marginLeft: 40 }}
                onPress={() => {[
                    navigation.navigate("Notif",toggleBottomNavigationView())
                  ]}}
              >
                <Feather
                  name="book-open"
                  
                  size={35}
                  color={"white"}
                />
                <Text
                  style={{
                    color: "white",
                    alignSelf: "center",
                    marginLeft: 20,
                  }}
                >
                  Select a Course
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.5}
                style={{ flexDirection: "row", marginLeft: 40, marginTop: 30 }}
              >
                <FontAwesome
                  name="users"
                  onPress={() => {
                    toggleBottomNavigationView();
                  }}
                  size={35}
                  color={"white"}
                />
                <Text
                  style={{
                    color: "white",
                    alignSelf: "center",
                    marginLeft: 20,
                  }}
                >
                  Select a Tutor
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default Show;
