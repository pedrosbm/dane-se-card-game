import React, { useContext, useEffect, useState } from "react";
import { Player } from "../types/player";
import { GameContext } from "../context/GameContext";
import { Button, Text, View } from "react-native";

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
            <Button disabled={value == 0} onPress={() => setValue(value - 1)} title="-" />
            <Text>{player.aposta}</Text>
            <Button onPress={() => setValue(value + 1)} title="+" />
        </View>
    )
}

export default BetSelector