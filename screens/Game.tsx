import React, { useContext, useEffect } from "react"
import { GameContext } from "../context/GameContext"
import { View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { GameNavigationProp } from "../types/navigation"
import { Button, Text } from "react-native-paper"

import Players from "../components/Players"

const Game = () => {
    const { round, setRound, fase, setFase, resetBet } = useContext(GameContext)

    const fases = ["façam suas apostas", "pontuar"]

    const navigate = useNavigation<GameNavigationProp>().navigate

    const nextRound = () => {
        if (round == 13) {
            navigate("fim")
        }
        setFase(1)
        setRound(round + 1)
        resetBet()
    }

    return (
        <View style={{height: "100%", padding: 20, gap: 10 }}>
            <View>
                <Text style={{ textAlign: "center", fontSize: 40 }}>Round {round}</Text>
                <Text style={{ textAlign: "center", fontSize: 20 }}>{fases[fase - 1]}</Text>
            </View>

            <Players removable={false} />

            {/* Controle de fases */}
            {fase == 1 ? (
                <Button mode="contained" onPress={() => setFase(2)}>Próximo</Button>
            ) : (
                <Button mode="contained" onPress={() => nextRound()}>{round == 13 ? "Finalizar": "Próxima rodada"}</Button>
            )}
        </View>
    )
}

export default Game