import {Pressable,TouchableOpacity, StyleSheet, Text, View } from "react-native";
import React from "react";

const T_Etape3 = () => {
  return (
    <View>
      {/* <Pressable
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
      </Pressable> */}
      <View>
        <Text style={{borderWidth:1,width:"70%",fontSize:25,textAlign:'center',alignSelf:'center'}}>Votre contact à bien reçu la somme de <Text style={{fontWeight:'bold'}}> 15.000 FCFA </Text></Text>
      </View>
      <TouchableOpacity style={{width:"70%",height:60,backgroundColor:'#25C595',alignSelf:'center',alignItems:'center',justifyContent:'center',marginTop:100,borderRadius:10}}>
        <Text style={{fontWeight:'bold',color:"#ffff"}}>Terminer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{width:"70%",height:60,backgroundColor:'black',alignSelf:'center',alignItems:'center',justifyContent:'center',marginTop:20,borderRadius:10}}>
        <Text style={{fontWeight:'bold',color:"#ffff"}}>Annuler</Text>
      </TouchableOpacity>
    </View>
  );
};

export default T_Etape3;

const styles = StyleSheet.create({});
