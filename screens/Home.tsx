import React from "react";

import { useNavigation } from "@react-navigation/native";

import { Button, Text } from "react-native";
import { GameNavigationProp } from "../types/navigation";

const Home = () => {

    const navigation = useNavigation<GameNavigationProp>()

    return (
        <>
            <Button title="navegar" onPress={() => navigation.navigate("game")}></Button>
            {/* <Text>Teste</Text> */}
        </>
    )
}

export default Home;