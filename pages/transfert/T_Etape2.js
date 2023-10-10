import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const T_Etape2 = () => {
  return (
    <View>
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
  )
}

export default T_Etape2

const styles = StyleSheet.create({})