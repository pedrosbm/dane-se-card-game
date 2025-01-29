import React from "react";

import { useNavigation } from "@react-navigation/native";

import { Button, Text } from "react-native";
import { GameNavigationProp } from "../types/navigation";

const Home = () => {
    const navigate = useNavigation<GameNavigationProp>().navigate

    return (
        <>
            <Text>Home</Text>
            <Button title="Novo jogo" onPress={() => navigate("cadastro")} />
        </>
    )
}

export default Home;