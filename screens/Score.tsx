import React, { useContext, useEffect } from "react"
import { View } from "react-native"
import Players from "../components/Players"
import { Text } from "react-native-paper"
import { GameContext } from "../context/GameContext"
import { useNavigation } from "@react-navigation/native"
import { GameNavigationProp } from "../types/navigation"
import Header from "../components/Header"

const Score = () => {

    const { round } = useContext(GameContext)

    const navigation = useNavigation<GameNavigationProp>()

    useEffect(() => {
        navigation.setOptions({
            header: () => <Header
                title="Score"
                actions={[{
                    icon: "check",
                    onPress: () => console.log("próxima fase")
                }]} />
        })
    }, [])

    return (
        <View style={{ height: "100%", padding: 10, gap: 10 }}>
            <View style={{ alignItems: "center" }}>
                <Text style={{ textAlign: "center", fontSize: 40 }}>Round {round}</Text>
                <Text>Conceda os pontos</Text>
            </View>

            <View style={{ height: "80%" }}>
                <Players fase={2} />
            </View >
        </View>
    )
}

export default Score