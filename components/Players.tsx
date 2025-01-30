import React, { useContext } from "react"
import { FlatList, View } from "react-native"
import { GameContext } from "../context/GameContext"
import { Button, Avatar, Card, Text, IconButton } from "react-native-paper"

import BetSelector from "./BetSelector"

type PlayersProps = {
    removable: boolean,
}

const Players = ({ removable }: PlayersProps) => {
    const { removePlayer, players, score, fase } = useContext(GameContext)

    return (
        <FlatList contentContainerStyle={{ display: "flex", gap: 5 }} data={players} renderItem={({ item }) => (
            <Card style={{ padding: 5, backgroundColor: item.color.value }}>
                {/* Jogador */}
                <Card.Content style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Avatar.Icon size={50} icon="account" />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ color: item.color.contrast }}>{item.nome}</Text>
                            <Text style={{ color: item.color.contrast }}>{item.pontos} Pontos</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        {removable &&
                            <IconButton size={40} onPress={() => removePlayer(item.nome)} iconColor={item.color.contrast} icon={"delete-circle"} />
                        }
                        {fase == 1 && <BetSelector player={item} />}
                        {fase == 2 && <Button mode="contained" onPress={() => score(item.nome)}>Pontuar</Button>}
                    </View>
                </Card.Content>

                {/* Controles */}
            </Card>
        )} />
    )
}

export default Players