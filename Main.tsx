import React, { useContext } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { GameContext } from "./context/GameContext";

import SignUpNavigation from "./stacks/SignUpNavigation";
import GameNavigation from "./stacks/GameNavigation";

const Main = () => {
  const { round } = useContext(GameContext)

  return round == 0 ? <SignUpNavigation/> : <GameNavigation/>
};

export default Main;