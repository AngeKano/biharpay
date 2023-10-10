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

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Presentation" component={Presentation} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign" component={Sign} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="T_Numero" component={T_Etape1} />
        <Stack.Screen name="T_Montant" component={T_Etape2} />
        <Stack.Screen name="T_Validate" component={T_Etape3} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
