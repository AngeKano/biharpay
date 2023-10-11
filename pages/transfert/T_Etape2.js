import {TextInput, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const T_Etape2 = () => {
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
      
      <View style={{marginHorizontal:20,marginTop:20}}> 
        <Text style={{fontSize:18,fontWeight:'bold',marginBottom:20}}>Contacts sélectionnée(s)</Text>
        <View></View>
        <View>
          <View>
          
          </View>
      </View>
        <Text style={{fontSize:22,fontWeight:'bold',marginBottom:20}}>Montant du transfert</Text>
        <TextInput style={{borderWidth:1,borderColor:"#04FFB4",height:60,borderRadius:10}} placeholder='Minimum 1000 FCFA'></TextInput>
      </View>
      <View>
        <View style={{display:'flex',flexDirection:"row-reverse",marginHorizontal:20,marginTop:25}}>
          <Text>Avec les frais 1%</Text>
        </View>
        <View style={{display:'flex',flexDirection:"column",marginHorizontal:20,marginTop:25}}>
          <Text>Montant reçu</Text>
          <Text style={{fontSize:22,fontWeight:'bold',marginTop:20}}>15.000 FCFA</Text>
        </View>
      </View>
      <TouchableOpacity style={{width:"70%",height:60,backgroundColor:'#25C595',alignSelf:'center',alignItems:'center',justifyContent:'center',marginTop:200,borderRadius:10}}>
        <Text style={{fontWeight:'bold',color:"#ffff"}}>Valider</Text>
      </TouchableOpacity>
    </View>
  )
}

export default T_Etape2

const styles = StyleSheet.create({})