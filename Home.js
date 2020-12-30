import React from "react";
import { View, Text, StyleSheet, Image,TouchableOpacity,ScrollView } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
// import { ScrollView } from "react-native-gesture-handler";

export default function Home() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.icon}>
        <SimpleLineIcons name="menu" size={24} color="black" />
      </View>
      <Text style={{fontSize:25,fontWeight:"bold"}}>Ski Villa</Text>

      <Image source={require("./assets/profile.png")} style={styles.image} />

      <Text style={styles.ticket}>Digital Tickets</Text>
      <Text style={styles.introText}>
        Getting as many people as you can through the door is one of your top
        priorities as an event organiser. That’s why you’ve landed on this page.
        The good news is there are plenty of tried-and-true ways to give your
        ticket sales that extra push. Without further ado, here are some
        marketing strategies that’ll show you how to increase event ticket
        sales.
      </Text>
      <TouchableOpacity style={styles.buttons}
      onPress={()=> console.log("button pressed")}
      >
          <Text style={styles.buttonText}>Start!</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal:10
  },
  icon: {
    alignSelf: "flex-end",
    marginHorizontal: 15,
    marginVertical: 35,
  },
  image: {
    height: 300,
    width: 300,
    alignSelf: "center",
    // marginTop: 40,
  },
  ticket:{
      fontSize:25,
      fontWeight:"bold",
      textAlign:"center"
  },
  introText:{
      textAlign:"center",
      color:'grey',
      fontSize:15
  },
  buttons:{
      width:'100%',
      height:'10%',
      alignItems:"center",
      justifyContent:"center",
     borderRadius:50,
      backgroundColor:"#5884ff",
      marginTop:30,
      marginBottom:35
     
  },
  buttonText:{
      color:"white",
      fontSize:25,
      fontWeight:"bold",
      shadowColor:'#000',
      shadowOffset:{
          width:0,
          height:2
      }
    }
  
});
