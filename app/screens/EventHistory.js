import React, { useState, useEffect } from "react";
import {StyleSheet, View, Text, TouchableOpacity, TextInput, FlatList, ImageBackground} from "react-native";
import { useNavigation } from "@react-navigation/native";

const EventHistory = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Event History</Text>
            <View style={styles.navContainer2}>
        <TouchableOpacity
          style={styles.button3}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text style={styles.buttonText}>Statistics</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button3}
          onPress={() => navigation.navigate("EventHistory")}
        >
          <Text style={styles.buttonText}>Event History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button3}
          onPress={() => navigation.navigate("Help")}
        >
          <Text style={styles.buttonText}>Help</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navContainer}>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate("AboutScreen")}
        >
          <Text style={styles.buttonText}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 25,
        marginBottom: 20,
        textAlign: "center",
        color: "black",
        fontWeight: "bold",
    },
    button: {
        width: 300,
        backgroundColor: "#33cccc",
        padding: 20,
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 60,
      },
      button2: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        marginBottom: 10,
        marginHorizontal: 10,
        width: 100,
      },
      listContainer: {
        justifyContent: "center",
        alignItems: "center",
      },
      navContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 10,
        backgroundColor: "gray",
      },
      navContainer2: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        padding: 10,
        backgroundColor: "white",
      },
      buttonText: {
        textAlign: "center",
      },
      button3: {
        backgroundColor: "gray",
        fontSize: 10,
        padding: 5,
        borderRadius: 30,
        marginTop: 20,
        marginLeft: 0,
        marginHorizontal: 5,
        width: 100,
      }
})
export default EventHistory;
