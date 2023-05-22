import { StyleSheet, View, StatusBar, Image } from "react-native";
import React from "react";
import Carousel from "../components/Carousel";
import Search from "../components/Search";
import Text from "../fonts/Text";
import TextSemiBold from "../fonts/TextSemiBold";
import profile from "../assets/p.png";
import Show from "../components/Bottom";

function HomeScreen({ navigation }) {
  //Slides Image
  const slides = [
    {
      image:
        "https://i.ytimg.com/vi/U_azgdEbNAw/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD-elwra1UDfspjZIHzFyIuBCyJKg",
    },
    { image: "https://i.ytimg.com/vi/1Pyh8oNM9hg/maxresdefault.jpg" },
    {
      image:
        "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png",
    },
    { image: "https://img-c.udemycdn.com/course/750x422/3112350_aa01_7.jpg" },
  ];

  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "#1e1e1e",
        paddingTop: StatusBar.currentHeight + 20,
      }}
    >
      {/* Top Tab */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ marginLeft: 20 }}>
          <Text style={{ color: "#fff", fontSize: 20 }}>Welcome</Text>
          <TextSemiBold style={{ color: "#fff", fontSize: 20 }}>
            JOHN DOE
          </TextSemiBold>
        </View>
        <View style={{ marginRight: 20, alignSelf: "center" }}>
          <Image source={profile} style={{ height: 45, width: 45 }} />
        </View>
      </View>

      <Search type="search" />

      <Carousel slides={slides} />

      <View
        style={{ marginTop: 30, alignSelf: "center", flexDirection: "row" }}
      >
        <Text style={{ color: "gray", fontSize: 20 }}>------------</Text>
        <TextSemiBold style={{ color: "#fff", fontSize: 20 }}> Courses </TextSemiBold>
        <Text style={{ color: "gray", fontSize: 20 }}>------------</Text>
      </View>

    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({});
