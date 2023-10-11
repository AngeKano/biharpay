import { Pressable,StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import ContactsDetail from '../../components/transfert/ContactsDetail'

const T_Etape1 = ({navigation}) => {
const [numueroPhone,setNumeroPhone]=useState('')

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
      <View style={{marginHorizontal:20}}>
        <Text style={{fontSize:22,fontWeight:'bold',marginBottom:20}}>Numero du recepteur</Text>
        <TextInput style={{borderWidth:1,borderColor:"#04FFB4",height:60,borderRadius:10}}></TextInput>
      </View>
      <View style={{marginHorizontal:20,marginTop:20}}> 
        <Text style={{fontSize:18,fontWeight:'bold',marginBottom:20}}>Contacts récents</Text>
        <View></View>
        <View>
          <Text style={{fontSize:18,fontWeight:'bold',marginBottom:20}}>Contacts</Text>
          <View>
           <ContactsDetail /> 
          </View>
        </View>
      </View>

    </View>
  )
}

export default T_Etape1

const styles = StyleSheet.create({})