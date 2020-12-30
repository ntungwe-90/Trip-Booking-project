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
//  import { Rating, AirbnbRating } from "react-native-ratings";

export default function DestinationDetails() {
  return (
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
        <Image source={require("./assets/onboard2.jpg")} style={styles.image} />
        <View style={styles.starContainer}>
          <Image source={require("./assets/ski.jpg")} style={styles.image2} />
          {/* <Rating
            readonly={true}
            imageSize={25}
            tintColor="#e6ebe6"
            style={{ paddingVertical: 10, alignSelf: "flex-start" }}
          /> */}
          <Text style={{ color: "black", fontSize: 20, marginVertical: 5 }}>
            Ski Villa
          </Text>
        </View>
        <View style={styles.imagetext}>
          <Text style={{ color: "grey", fontSize: 20 }}>France</Text>
          <Text style={{ color: "black", fontSize: 13 }}>
            ski villa offers simple rooms with mountain views
          </Text>
        </View>
        <View style={styles.about}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>About</Text>
          <Text style={{ color: "black", fontSize: 15 }}>
            Getting as many people as you can through the door is one of your
            top priorities as an event organiser. That’s why you’ve landed on
            this page. The good news is there are plenty of tried-and-true ways
            to give your ticket sales that extra push. Without further ado, here
            are some marketing strategies that’ll show you how to increase event
            ticket sales.
          </Text>
        </View>
        <TouchableOpacity style={styles.buttons}>
          <View style={styles.buttonItems}>
            <Text style={styles.price}>$1000</Text>
            <TouchableOpacity style={styles.button2}>
              <Text style={styles.buy}>Puchase</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f1f7",

    marginVertical: 35,
  },
  icons: {
    flexDirection: "row",
  },
  dotIcon: {
    marginLeft: 290,
  },
  imageContainer: {
    flex: 2,
  },
  image: {
    height: 280,
    width: 400,
  },

  starContainer: {
    position: "absolute",
    flexDirection: "row",
    height: 100,
    width: 300,
    backgroundColor: "white",
    borderRadius: 15,
    marginTop: 250,
    alignSelf: "center",
  },
  image2: {
    height: 60,
    width: 50,
    borderRadius: 20,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  imagetext: {
    marginHorizontal: 90,
  },
  about: {
    marginHorizontal: 15,
    marginVertical: 25,
  },
  buttons: {
    height: "13%",
    width: "100%",
    borderRadius: 30,
  },
  price: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 30,
    marginHorizontal: 30,
  },
  buttonItems: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button2: {
    height: 40,
    width: 95,
    backgroundColor: "#84aedb",
    borderRadius: 10,
    alignSelf: "center",
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  buy: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
});
