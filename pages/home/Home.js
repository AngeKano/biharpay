import {
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import React, { useRef, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import data from "../../data/data";

const Home = ({ navigation: { navigate } }) => {
  const { User_Contact, Transact } = data;
  const [card, setCard] = useState(false);
  const data_null = [1];
  return (
    <FlatList
      data={data_null}
      renderItem={({ item }) => (
        <View style={styles.container}>
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
              <View style={{ alignItems: "flex-end" }}>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "semibold",
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
                  style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
                >
                  75.000{" "}
                  <Text style={{ color: "gray", fontSize: 17 }}>FCFA</Text>
                </Text>
              </View>
              <View>
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
                >
                  Amani Yohan Ange 🙈
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
                <Text style={{ color: "gray", fontWeight: "semibold" }}>
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
              <Text style={{ fontSize: 18, fontWeight: "semibold" }}>
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
              <Text style={{ fontSize: 18, fontWeight: "semibold" }}>
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
              <Text style={{ fontSize: 18, fontWeight: "semibold" }}>
                Transfert
              </Text>
            </View>
          </View>

          <View style={{ marginBottom: 30 }}>
            <Text style={{ fontSize: 19, fontWeight: "semibold" }}>
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
                    <View
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 40,
                        backgroundColor: "gray",
                      }}
                    ></View>
                    <Text>{item.name}</Text>
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
              <Text style={{ fontSize: 19, fontWeight: "semibold" }}>
                Historique de transaction
              </Text>
              <Entypo name="chevron-down" size={24} color="black" />
            </View>
            <View style={{ marginTop: 20 }}>
              <FlatList
                data={Transact}
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
                      <View
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: 40,
                          backgroundColor: "gray",
                        }}
                      ></View>
                      <View style={{ gap: 5 }}>
                        <Text>{item.contact}</Text>
                        <Text>{item.date}</Text>
                      </View>
                    </View>

                    <View>
                      <Text>{item.montant + " " + item.devise}</Text>
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

{
  /* <Text>DFGHJK</Text>

<Carousel
  layout="stack"
  layoutCardOffset={9}
  ref={isCarousel}
  data={data}
  renderItem={({ item }) => (
    <View
      style={{ width: 200, height: 100, backgroundColor: "black" }}
    ></View>
  )}
  sliderWidth={400}
  itemWidth={200}
  inactiveSlideShift={0}
  useScrollView={true}
/> */
}
