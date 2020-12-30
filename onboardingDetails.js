import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function OnboardingDetails() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.icons}>
          <AntDesign name="right" size={28} color="black" />
          <MaterialCommunityIcons
            name="dots-vertical"
            size={28}
            color="black"
            style={styles.dotIcon}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("./assets/aventure.jpg")}
            style={styles.image}
          />
          <TouchableOpacity>
            <View style={styles.menuIcons}>
              <MaterialIcons
                name="flight"
                size={28}
                color="white"
                style={{
                  height: 60,
                  width: 70,
                  backgroundColor: "pink",
                  borderRadius: 10,
                  paddingVertical: 3,
                  paddingLeft:25,
                  paddingTop:15
                }}
              />
              <FontAwesome5
                name="hotel"
                size={24}
                color="white"
                style={{
                  height: 60,
                  width: 70,
                  backgroundColor: "red",
                  borderRadius: 10,
                  paddingLeft:25,
                  paddingTop:15
                }}
              />
              <MaterialIcons
                name="train"
                size={24}
                color="white"
                style={styles.menu}
              />
              <FontAwesome5
                name="taxi"
                size={24}
                color="white"
                style={{
                  height: 60,
                  width: 70,
                  backgroundColor: "green",
                  borderRadius: 10,
                  paddingLeft:25,
                   paddingTop:15
                }}
              />
            </View>
            <View style={styles.location1}>
              <Text>flight</Text>
              <Text>hotel</Text>
              <Text>bus</Text>
              <Text>taxi</Text>
            </View>

            <View style={styles.menuIcons}>
              <FontAwesome
                name="cutlery"
                size={24}
                color="white"
                style={{
                  height: 60,
                  width: 70,
                  backgroundColor: "blue",
                  borderRadius: 10,
                  paddingLeft:25,
                  paddingTop:15
                }}
              />
              <MaterialCommunityIcons
                name="party-popper"
                size={24}
                color="white"
                style={{
                  height: 60,
                  width: 70,
                  backgroundColor: "yellow",
                  borderRadius: 10,
                  paddingLeft:25,
                  paddingTop:15
                }}
              />
              <FontAwesome5
                name="train"
                size={24}
                color="white"
                style={styles.menu}
              />
              <FontAwesome
                name="rocket"
                size={24}
                color="white"
                style={{
                  height: 60,
                  width: 70,
                  backgroundColor: "#6ce69a",
                  borderRadius: 10,
                  paddingLeft:25,
                  paddingTop:15
                }}
              />
            </View>
            <View style={styles.location1}>
              <Text>cutlery</Text>
              <Text>party</Text>
              <Text>train</Text>
              <Text>rocket</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.text}>DESTINATIONS</Text>
          <View style={styles.location}>
            <Image source={require("./assets/hockey.jpg")} style={styles.img} />
            <Image source={require("./assets/hill.jpg")} style={styles.img} />
            <Image source={require("./assets/ski.jpg")} style={styles.img} />
          </View>
          <View style={styles.location}>
            <Text>Ski Villa</Text>
            <Text>Climing Hills</Text>
            <Text>Frozen Hills</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <AntDesign name="search1" size={24} color="black" />
          <MaterialIcons name="house" size={24} color="black" />
          <AntDesign name="phone" size={24} color="black" />
          <AntDesign name="hearto" size={24} color="black" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: 15,
    marginVertical: 35,
  },
  icons: {
    flexDirection: "row",
  },
  dotIcon: {
    marginLeft: 290,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    height: 280,
    width: 400,
  },
  menuIcons: {
    flexDirection: "row",
    marginHorizontal: 5,
    marginVertical: 15,
    justifyContent: "space-around",
    
  },
  menu: {
    height: 60,
    width: 70,
    backgroundColor: "#97cde8",
    borderRadius: 15,
    // paddingVertical: 3,
    paddingLeft:25,
    paddingTop:15
    // alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    marginVertical: 15,
    marginHorizontal: 15,
    fontSize: 20,
    fontWeight: "bold",
  },
  location: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  img: {
    height: 200,
    width: 100,
    borderRadius: 15,
  },
  location1: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    marginBottom: 0,
  },
});
