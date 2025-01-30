import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { GameNavigation } from "./types/navigation";

import Home from "./screens/Home";
import Cadastro from "./screens/Cadastro";
import Game from "./screens/Game";
import Fim from "./screens/Fim";

const Stack = createNativeStackNavigator<GameNavigation>();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen options={{headerShown: true, headerTitle: "Jogadores"}} name="cadastro" component={Cadastro} />
        <Stack.Screen name="game" component={Game} />
        <Stack.Screen name="fim" component={Fim} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;