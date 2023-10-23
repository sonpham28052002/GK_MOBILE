import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import screen1 from "./screen/screen1";
import screen2 from "./screen/screen2";

var Stack = createNativeStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen
          component={screen1}
          name="screen1"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={screen2}
          name="screen2"
          options={{ 
            headerRight:()=>{
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
