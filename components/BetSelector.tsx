import React, { useContext, useEffect, useState } from "react";
import { Player } from "../types/player";
import { GameContext } from "../context/GameContext";
import { View } from "react-native";
import { Button, Text } from "react-native-paper"

type BetSelectorProps = {
    player: Player
}

const BetSelector = ({ player }: BetSelectorProps) => {
    const [value, setValue] = useState<number>(0)
    const { setBet } = useContext(GameContext)

    useEffect(() => {
        setBet(player.nome, value)
    }, [value])

    return (
        <View>
            <Button disabled={value == 0} onPress={() => setValue(value - 1)} mode="contained">-</Button>
            <Text>{player.aposta}</Text>
            <Button onPress={() => setValue(value + 1)} mode="contained">+</Button>
        </View>
    )
}

export default BetSelector