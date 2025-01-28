import React from "react";

import { useNavigation } from "@react-navigation/native";

import { Button, Text } from "react-native";
import { GameNavigationProp } from "../types/navigation";

const Home = () => {

    const navigation = useNavigation<GameNavigationProp>()

    return (
        <>
            <Text>Home</Text>
            <Button title="Novo jogo" onPress={() => navigation.navigate("cadastro")} />
        </>
    )
}

export default Home;