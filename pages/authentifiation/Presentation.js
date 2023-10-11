import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Presentation = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Zona-regular": require("../../assets/font/ZonaPro-Regular.ttf"),
    "Zona-bold": require("../../assets/font/ZonaPro-Bold.otf"),
    "Zona-semibold": require("../../assets/font/ZonaPro-SemiBold.otf"),
    "Zona-Light": require("../../assets/font/ZonaPro-Light.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View
        style={{
          flex: 1,
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontFamily: "Zona-semibold",
            textAlign: "center",
          }}
        >
          Bienvenue
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontFamily: "Zona-semibold",
            textAlign: "center",
          }}
        >
          BiharPay
        </Text>
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
            style={{
              fontSize: 18,
              fontFamily: "Zona-semibold",
              color: "white",
            }}
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
            style={{
              fontSize: 18,
              fontFamily: "Zona-semibold",

              color: "white",
            }}
          >
            Inscription
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Presentation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
