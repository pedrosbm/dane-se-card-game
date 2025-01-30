import React, { useContext, useEffect } from "react"
import { Text, View } from "react-native"
import { GameContext } from "../context/GameContext"
import Players from "../components/Players"

const Fim = () => {
    const { players } = useContext(GameContext)

    useEffect(() => {
        players.sort((a, b) => b.pontos - a.pontos)
    }, [])

    const handleEnding = () => {

    }

    return (
        <View>
            <Text>Pódio</Text>
            <Players removable={false} />
        </View>
    )
}

export default Fim