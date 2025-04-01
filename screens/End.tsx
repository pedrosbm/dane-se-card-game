import React, { useContext, useEffect } from "react"

import { View } from "react-native"
import { GameContext } from "../context/GameContext"
import { useNavigation } from "@react-navigation/native"
import { GameNavigationProp } from "../types/navigation"
import { Text, Button } from "react-native-paper"

import Players from "../components/Players"

const End = () => {
    const { players, setPlayers, setRound } = useContext(GameContext)

    const navigate = useNavigation<GameNavigationProp>()
    
    useEffect(() => {
        setRound(0)
        const sortedPlayers = [...players].sort((a, b) => b.pontos - a.pontos)
        setPlayers(sortedPlayers)
    }, [])

    // const handleEnding = () => {
    //     setPlayers([])
    //     navigate("home")
    // }

    return (
        <View style={{ padding: 20, height: "100%" }}>
            <Text style={{ textAlign: "center", fontSize: 40 }}>Resultado</Text>
            {/* <Players removable={false} />
            <Button mode="contained" onPress={handleEnding}>Finalizar</Button> */}
        </View>
    )
}

export default End