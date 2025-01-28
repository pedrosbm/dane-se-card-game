import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { GameNavigation } from "./types/navigation";

import Home from "./screens/Home";
import Cadastro from "./screens/Cadastro";

const Stack = createNativeStackNavigator<GameNavigation>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen options={{headerShown: false}} name="cadastro" component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;