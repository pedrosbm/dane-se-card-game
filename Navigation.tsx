import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Game from "./screens/Game";
import { GameNavigation } from "./types/navigation";

const Stack = createNativeStackNavigator<GameNavigation>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="game" component={Game} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;