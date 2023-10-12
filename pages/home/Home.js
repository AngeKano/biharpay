import {
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import React, { useCallback,useContext, useEffect, useRef, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import data from "../../data/data";
import { AuthContext } from "../../context/AuthContext";
import axios from "react-native-axios"

const Home = ({ navigation: { navigate } }) => {
  const { User_Contact, Transact } = data;
  const [card, setCard] = useState(false);
  const [transaction,setTransaction]= useState([''])
  const [name,setName]=useState('')
  const [solde,setSolde]=useState('')

  const [fontsLoaded] = useFonts({
    "Zona-regular": require("../../assets/font/ZonaPro-Regular.ttf"),
    "Zona-bold": require("../../assets/font/ZonaPro-Bold.otf"),
    "Zona-semibold": require("../../assets/font/ZonaPro-SemiBold.otf"),
    "Zona-Light": require("../../assets/font/ZonaPro-Light.otf"),
  });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }
  const { numeroPhones , idUser } = useContext(AuthContext)

  useEffect(()=>{
     axios.get(`http://192.168.1.102:8083/transactions/getAllTransactions?numeroPhone=${numeroPhones}`)
    .then(function (response) {
      console.log(response.data);
      const adaptedTransactions = response.data.map((serverTransaction) => {
        const contact = serverTransaction.user.names; // Ou toute autre propriété que vous voulez utiliser
        const date =serverTransaction.transactionType; // Obtenez la date depuis serverTransaction si elle est disponible
        const montant = serverTransaction.amount;
        const devise = "FCFA"; // Ou obtenez-la depuis serverTransaction si elle est disponible
        const image = ""; // Obtenez l'image depuis serverTransaction si elle est disponible

        return { contact, date, montant, devise, image };
      });
      setTransaction(adaptedTransactions)

    })
    .catch(function (error) {
      console.log(error);
    });


    axios.get(`http://192.168.1.102:8083/users/${idUser}`)
    .then(function (response) {
      console.log(response.data);
      setSolde(response.data.solde)
      setName(response.data.names)

    })
    .catch(function (error) {
      console.log(error);
    });

  },[transaction])
  console.log(transaction);
  return (
    <FlatList
      data={[1]}
      renderItem={({ item }) => (
        <View style={styles.container} 
        // onLayout={onLayoutRootView}
        >
          {card ? (
            <Pressable
              onPress={() => {
                setCard(!card);
              }}
              style={{
                width: "90%",
                alignSelf: "center",
                height: 180,
                backgroundColor: "black",
                borderRadius: 15,
                position: "relative",
                paddingHorizontal: 21,
                paddingVertical: 24,
              }}
            >
              <View
                style={{
                  width: 100,
                  height: 100,
                  display: "flex",
                  alignSelf: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{ width: 100, height: 100 }}
                  source={require("../../assets/qrCode/Cells.png")}
                />
              </View>
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                  flexDirection: "row",
                  marginTop: 15,
                  gap: 6,
                }}
              >
                <AntDesign name="qrcode" size={18} color="gray" />
                <Text style={{ color: "gray", fontFamily: "Zona-semibold" }}>
                  Scanner
                </Text>
              </View>

              <View
                style={{
                  alignItems: "flex-end",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                }}
              >
                <View
                  style={{
                    width: 23,
                    height: 43,
                    backgroundColor: "#25C595",
                    borderTopStartRadius: 23,
                    borderBottomStartRadius: 23,
                  }}
                ></View>
                <View
                  style={{
                    width: 63,
                    height: 57,
                    backgroundColor: "#04FFB4",
                    borderTopStartRadius: 20,
                    borderBottomEndRadius: 15,
                  }}
                ></View>
              </View>
              <View
                style={{
                  alignItems: "flex-start",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              >
                <View
                  style={{
                    width: 63,
                    height: 57,
                    backgroundColor: "#04FFB4",
                    borderTopStartRadius: 15,
                    borderBottomEndRadius: 20,
                  }}
                ></View>
                <View
                  style={{
                    width: 23,
                    height: 43,
                    backgroundColor: "#25C595",
                    borderTopEndRadius: 23,
                    borderBottomEndRadius: 23,
                  }}
                ></View>
              </View>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                setCard(!card);
              }}
              style={{
                width: "90%",
                alignSelf: "center",
                height: 180,
                backgroundColor: "black",
                borderRadius: 15,
                position: "relative",
                paddingHorizontal: 21,
                paddingVertical: 24,
              }}
            >
              <View style={{ alignItems: "flex-end" }}>
                <Text
                  style={{
                    color: "white",
                    fontFamily: "Zona-semibold",
                    fontSize: 18,
                  }}
                >
                  BiharPay
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontFamily: "Zona-bold",
                  }}
                >
                  {solde}{" "}
                  <Text style={{ color: "gray", fontSize: 17 }}>FCFA</Text>
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 17,
                    fontFamily: "Zona-bold",
                    color: "white",
                  }}
                >
                  {name} 🙈
                </Text>
              </View>
              <View
                style={{
                  alignItems: "flex-end",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                }}
              >
                <View
                  style={{
                    width: 23,
                    height: 43,
                    backgroundColor: "#25C595",
                    borderTopStartRadius: 23,
                    borderBottomStartRadius: 23,
                  }}
                ></View>
                <View
                  style={{
                    width: 63,
                    height: 57,
                    backgroundColor: "#04FFB4",
                    borderTopStartRadius: 20,
                    borderBottomEndRadius: 15,
                  }}
                ></View>
              </View>
            </Pressable>
          )}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 39,
              alignItems: "center",
              justifyContent: "center",
              marginVertical: 25,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
              }}
            >
              <View
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 7,
                  backgroundColor: "rgba(4, 255, 179.70, 0.10)",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../../assets/icons/depot.png")}
                  style={{ width: 32, height: 34.5 }}
                />
              </View>
              <Text style={{ fontSize: 16, fontFamily: "Zona-semibold" }}>
                Dépot
              </Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
              }}
            >
              <View
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 7,
                  backgroundColor: "rgba(4, 255, 179.70, 0.10)",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../../assets/icons/retrait.png")}
                  style={{ width: 32, height: 34.5 }}
                />
              </View>
              <Text style={{ fontSize: 16, fontFamily: "Zona-semibold" }}>
                Retrait
              </Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
              }}
            >
              <View
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 7,
                  backgroundColor: "rgba(4, 255, 179.70, 0.10)",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../../assets/icons/transaction.png")}
                  style={{ width: 52, height: 42 }}
                 />
              </View>
              <Text style={{ fontSize: 16, fontFamily: "Zona-semibold" }}
              onPress={()=> navigate("T_Numero", { user: item })}
              >
                Transfert
              </Text>
            </View>
          </View>

          <View style={{ marginBottom: 30 }}>
            <Text style={{ fontSize: 19, fontFamily: "Zona-semibold" }}>
              Contact récents
            </Text>
            <View style={{ marginTop: 20 }}>
              <FlatList
                data={User_Contact}
                horizontal
                ItemSeparatorComponent={() => <View style={{ width: 18 }} />}
                renderItem={({ item }) => (
                  <View
                    style={{
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                    }}
                  >
                    <Image
                      source={item.image}
                      style={{
                        width: 50,
                        height: 50,
                      }}
                    />
                    <Text style={{ fontFamily: "Zona-regular" }}>
                      {item.name}
                    </Text>
                  </View>
                )}
              />
            </View>
          </View>

          <View>
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Text style={{ fontSize: 19, fontFamily: "Zona-semibold" }}>
                Historique de transaction
              </Text>
              <Entypo name="chevron-down" size={24} color="black" />
            </View>
            <View style={{ marginTop: 20, marginBottom: 20 }}>
            <FlatList
data={transaction.sort((a, b) => b.date.localeCompare(a.date))}
  ItemSeparatorComponent={() => <View style={{ height: 18 }} />}
  renderItem={({ item }) => (
    <Pressable
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 9,
      }}
      onPress={() => {
        navigate("Details", { user: item });
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 7,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={item.image}
          style={{ width: 50, height: 50 }}
        />
        <View style={{ gap: 5 }}>
          <Text style={{ fontFamily: "Zona-semibold" }}>
            {item.contact}
          </Text>
          <Text
            style={{ fontFamily: "Zona-regular", color: "gray" }}
          >
            {item.date}
          </Text>
        </View>
      </View>

      <View>
        {-item.date === "TRANSFER" || item.date === "WITHDRAW" ? (
          <Text
            style={{
              color: "#FF2121",
              fontFamily: "Zona-bold",
              fontSize: 17,
            }}
          >
            {item.montant + " " + item.devise}
          </Text>
        ) : (
          <Text
            style={{
              color: "#25C595", // Couleur pour les autres transactions
              fontFamily: "Zona-bold",
              fontSize: 17,
            }}
          >
            {+ item.montant + " " + item.devise}
          </Text>
        )}
      </View>
    </Pressable>
  )}
/>

            </View>
          </View>
        </View>
      )}
    />
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFFFE",
  },
});

