import React, { useContext, useEffect, useState } from "react";
import { Player } from "../types/player";
import { GameContext } from "../context/GameContext";
import { View } from "react-native";
import { Button, Divider, IconButton, Text } from "react-native-paper"

type BetSelectorProps = {
    player: Player,
    disabled: boolean
}

const BetSelector = ({ player, disabled }: BetSelectorProps) => {
    const [value, setValue] = useState<number>(0)
    const { setBet } = useContext(GameContext)

    useEffect(() => {
        setBet(player.nome, value)
    }, [value])

    return (
        <View style={{ justifyContent: "center" }}>
            <Text style={{ color: player.color.contrast }}>Aposta</Text>
            <View style={{ flexDirection: "row" }}>
                {!disabled && <IconButton iconColor={player.color.contrast} icon="minus" disabled={value == 0} onPress={() => setValue(value - 1)} />}
                <View style={{ width: 50, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontSize: 15, color: player.color.contrast }}>{player.aposta}</Text>
                </View>
                {!disabled && <IconButton iconColor={player.color.contrast} icon="plus" onPress={() => setValue(value + 1)} />}
            </View>
        </View>
    )
}

export default BetSelector