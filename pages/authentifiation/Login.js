import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { TextInput } from "react-native-gesture-handler";
import { AuthContext } from "../../context/AuthContext";

const Login = ({ navigation: { replace } }) => {
  const { setNavigate } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          marginVertical: 20,

          marginHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "semibold" }}>
          Authentifiez vous
        </Text>
      </View>

      <View
        style={{
          gap: 22,
          flex: 1,
          marginTop: 25,
          marginHorizontal: 20,
        }}
      >
        <View style={{ gap: 7 }}>
          <Text style={{ fontSize: 17 }}>Email</Text>
          <TextInput
            style={{
              paddingVertical: 8,
              paddingHorizontal: 10,
              borderColor: "rgba(4, 255, 179.70, 0.29)",

              borderWidth: 1,
              borderRadius: 9,
            }}
            keyboardType="email-address"
          />
        </View>
        <View style={{ gap: 7 }}>
          <Text style={{ fontSize: 17 }}>Mot de passe</Text>
          <TextInput
            style={{
              paddingVertical: 8,
              paddingHorizontal: 10,
              borderColor: "rgba(4, 255, 179.70, 0.29)",

              borderWidth: 1,
              borderRadius: 9,
            }}
            keyboardType="email-address"
          />
        </View>
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 20,
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
            setNavigate(true);  
          }}
        >
          <Text
            style={{ fontSize: 18, fontWeight: "semibold", color: "white" }}
          >
            Connexion
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
