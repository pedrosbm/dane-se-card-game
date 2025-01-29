import React, { useContext, useEffect } from "react"
import { GameContext } from "../context/GameContext"
import Players from "../components/Players"
import { Button, Text, View } from "react-native"

const Game = () => {
    const { round, setRound, fase, setFase, resetBet } = useContext(GameContext)

    const fases = ["façam suas apostas", "pontuar"]

    useEffect(() => {
        setFase(1)
    }, [])

    const nextRound = () => {
        setFase(1)
        setRound(round + 1)
        resetBet()
    }

    return (
        <View>
            <Text>Round {round}</Text>
            <Text>{fases[fase - 1]}</Text>
            <Players removable={false} />

            {/* Controle de fases */}
            {fase == 1 ?
                <Button onPress={() => setFase(2)} title="Próximo" />
                :
                <Button onPress={() => nextRound()} title="Finalizar" />
            }
        </View>
    )
}

export default Game