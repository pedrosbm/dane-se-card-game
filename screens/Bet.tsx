import React, { useContext, useEffect } from "react"
import { GameContext } from "../context/GameContext"
import { View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { GameNavigationProp } from "../types/navigation"
import { Button, Text } from "react-native-paper"

import Players from "../components/Players"

const Bet = () => {
    const { round, setRound, resetBet } = useContext(GameContext)

    const fases = ["façam suas apostas", "pontuar"]

    const navigation = useNavigation<GameNavigationProp>()

    const nextRound = () => {
        if (round == 13) {
            navigation.navigate("end")
        }
        setRound(round + 1)
        resetBet()
    }

    useEffect(() => {

    }, [])

    return (
        <View style={{ height: "100%", padding: 10, gap: 10 }}>
            <View>
                <Text style={{ textAlign: "center", fontSize: 40 }}>Round {round}</Text>
            </View>

            <View style={{ height: "81%" }}>
                <Players fase={1} />
            </View >

            {/* TODO avanço para pontuação */}
        </View>
    )
}

export default Bet