import React, { useContext, useEffect } from "react"

import { Button, Text, View } from "react-native"
import { GameContext } from "../context/GameContext"
import { useNavigation } from "@react-navigation/native"
import { GameNavigationProp } from "../types/navigation"

import Players from "../components/Players"

const Fim = () => {
    const { players, setPlayers, setFase, setRound } = useContext(GameContext)

    const navigate = useNavigation<GameNavigationProp>().navigate

    useEffect(() => {
        setFase(0)
        setRound(0)
        const sortedPlayers = [...players].sort((a, b) => b.pontos - a.pontos)
        setPlayers(sortedPlayers)
    }, [])

    const handleEnding = () => {
        setPlayers([])
        navigate("home")
    }

    return (
        <View>
            <Text>Pódio</Text>
            <Players removable={false} />
            <Button onPress={handleEnding} title="Finalizar"/>
        </View>
    )
}

export default Fim