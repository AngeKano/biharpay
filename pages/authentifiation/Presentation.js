import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Presentation = ({ navigation }) => {
  return (
    <View>
      <Text>Presentation</Text>
      <Pressable
        style={{
          paddingVertical: 7,
          paddingHorizontal: 10,
          backgroundColor: "red",
        }}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text>Bihar</Text>
      </Pressable>
      <View>
        <View>
        <View
          style={{
            width: 63,
            height: 57,
            backgroundColor: "#04FFB4",
            borderTopStartRadius: 20,
            borderBottomEndRadius: 20,
          }}
        ></View>
        <View
          style={{
            width: 23,
            height: 43,
            backgroundColor: "#04FFB4",
            borderTopStartRadius: 23,
            borderBottomStartRadius: 23,
          }}
        ></View>
        </View>
       
      </View>
    </View>
  );
};

export default Presentation;

const styles = StyleSheet.create({});
