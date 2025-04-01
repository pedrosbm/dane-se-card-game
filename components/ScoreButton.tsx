import React, { useContext, useState } from "react"
import { GameContext } from "../context/GameContext"
import { Button } from "react-native-paper"
import { Player } from "../types/player"

type scoreProps = {
    player: Player
}

const Score = ({ player }: scoreProps) => {
    const [beenScored, setBeenScored] = useState<boolean>(false)
    const { score, unscore } = useContext(GameContext)

    const handlePress = () => {
        beenScored ? unscore(player.nome) : score(player.nome)
        setBeenScored(!beenScored)
    }

    return (
        <Button icon={"plus"} mode="contained" onPress={handlePress}>{beenScored ? "Desfazer" : "Pontuar"}</Button>
    )
}

export default Score