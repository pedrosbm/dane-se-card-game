import React, { useContext } from "react"
import { GameContext } from "../context/GameContext"
import Players from "../components/Players"
import { Text, View } from "react-native"

const Game = () => {

    const { players, round, setRound, fase, setFase } = useContext(GameContext)

    const fases = ["façam suas apostas", "pontuar"]

    return (
        <>
            <View>
                <Text>Round {round}</Text>
                <Players removable={false} punctuable={true} />
            </View>
        </>
    )
}

export default Game