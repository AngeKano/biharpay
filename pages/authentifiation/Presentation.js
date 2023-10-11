import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Presentation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "semibold" }}>Bienvenue</Text>
        <Text style={{ fontSize: 25, fontWeight: "semibold" }}>BiharPay</Text>
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 20,
          width: "100%",
          gap: 10,
        }}
      >
        <Pressable
          style={{
            width: "80%",
            paddingVertical: 15,
            backgroundColor: "#25C595",
            borderRadius: 15,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text
            style={{ fontSize: 18, fontWeight: "semibold", color: "white" }}
          >
            Connexion
          </Text>
        </Pressable>
        <Pressable
          style={{
            width: "80%",
            paddingVertical: 15,
            backgroundColor: "#000000",
            borderRadius: 15,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            navigation.navigate("Sign");
          }}
        >
          <Text
            style={{ fontSize: 18, fontWeight: "semibold", color: "white" }}
          >
            Inscription
          </Text>
        </Pressable>
      </View>

      {/* <View>
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
       
      </View> */}
    </View>
  );
};

export default Presentation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
