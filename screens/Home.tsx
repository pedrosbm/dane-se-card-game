import React from "react";

import { useNavigation } from "@react-navigation/native";
import { Image, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { SignUpNavigationProp } from "../types/navigation";
// import { Text } from "react-native-paper";

const Home = () => {
    const navigate = useNavigation<SignUpNavigationProp>().navigate

    return (
        <View style={{alignItems: "center", justifyContent: "center", height: "100%"}}>
            <Image
                source={require('../assets/DANE-SE.png')}
                style={{ width: 300, height: 300 }}
            />
            <Button onPress={() => navigate("cadastro")} mode="contained">Novo jogo</Button>
        </View>
    )
}

export default Home;