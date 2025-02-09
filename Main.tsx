import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { GameNavigation } from "./types/navigation";

import Home from "./screens/Home";
import Cadastro from "./screens/Cadastro";
import Game from "./screens/Game";
import Fim from "./screens/Fim";
import Header from "./components/Header";

const Stack = createNativeStackNavigator<GameNavigation>();

const Main = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="home"
                    component={Home}
                />

                <Stack.Screen
                    options={{ headerShown: true }}
                    name="cadastro"
                    component={Cadastro}
                />

                <Stack.Screen
                    name="game"
                    component={Game}
                />

                <Stack.Screen
                    name="fim"
                    component={Fim}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Main;