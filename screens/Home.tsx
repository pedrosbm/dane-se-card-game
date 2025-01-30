import React from "react";

import { useNavigation } from "@react-navigation/native";

import { Button, Text, View } from "react-native";
import { GameNavigationProp } from "../types/navigation";

const Home = () => {
    const navigate = useNavigation<GameNavigationProp>().navigate

    return (
        <View>
            <Text>Home</Text>
            <Button title="Novo jogo" onPress={() => navigate("cadastro")} />
        </View>
    )
}

export default Home;