import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Sign = () => {
  return (
    <View>
      <Text>Sign</Text>
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
    </View>
  );
};

export default Sign;

const styles = StyleSheet.create({});
