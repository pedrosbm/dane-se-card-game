import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { GameNavigation } from "./types/navigation";

import Home from "./screens/Home";
import Cadastro from "./screens/Cadastro";
import Game from "./screens/Game";
import Fim from "./screens/Fim";

const Stack = createNativeStackNavigator<GameNavigation>();

const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen options={{ headerShown: false }} name="cadastro" component={Cadastro} />
        <Stack.Screen options={{ headerShown: false }} name="game" component={Game} />
        <Stack.Screen options={{ headerShown: true }} name="fim" component={Fim} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;