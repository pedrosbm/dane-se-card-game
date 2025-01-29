import React, { useContext } from "react"
import { Button, FlatList, Text, View } from "react-native"
import { GameContext } from "../context/GameContext"

type PlayersProps = {
    removable: boolean,
    punctuable: boolean
}

const Players = ({ removable, punctuable }: PlayersProps) => {

    const { removePlayer, players, score } = useContext(GameContext)

    return (
        <FlatList contentContainerStyle={{ display: "flex", gap: 5 }} data={players} renderItem={({ item }) => (
            <View style={{ padding: 5, backgroundColor: item.color.value }}>
                {removable && <Button onPress={() => removePlayer(item.nome)} title="remover" />}
                <Text style={{ color: item.color.contrast }}>{item.nome}</Text>
                {punctuable && <Button onPress={() => score(item.nome)} title="Pontuar" />}
            </View>
        )} />
    )
}

export default Players