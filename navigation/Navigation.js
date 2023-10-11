import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Presentation from "../pages/authentifiation/Presentation";
import Login from "../pages/authentifiation/Login";
import Sign from "../pages/authentifiation/Sign";
import Home from "../pages/home/Home";
import T_Etape1 from "../pages/transfert/T_Etape1";
import T_Etape2 from "../pages/transfert/T_Etape2";
import T_Etape3 from "../pages/transfert/T_Etape3";
import Details from "../pages/details/Details";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { View, Text } from "react-native";

const Stack = createStackNavigator();

const Navigation = ({ navigation }) => {
  const { navigate } = useContext(AuthContext);
  console.log(navigate);

  return (
    <NavigationContainer>
      {navigate ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Accueil",
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: "white",
                height: 100,
              },
              headerRight: () => (
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    backgroundColor: "gray",
                    marginRight: 18,
                  }}
                ></View>
              ),
            }}
          />
          <Stack.Screen name="T_Numero" component={T_Etape1} />
          <Stack.Screen name="T_Montant" component={T_Etape2} />
          <Stack.Screen name="T_Validate" component={T_Etape3} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Presentation"
            component={Presentation}
            options={{
              headerTitle: "",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerTitle: "",
            }}
          />
          <Stack.Screen
            name="Sign"
            component={Sign}
            options={{
              headerTitle: "",
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
