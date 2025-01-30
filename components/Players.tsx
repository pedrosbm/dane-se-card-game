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
                {removable &&
                    <IconButton onPress={() => removePlayer(item.nome)} iconColor={item.color.contrast} icon={"delete"} />
                }

                {/* Jogador */}
                <Card.Content>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Avatar.Icon size={50} icon="account" />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ color: item.color.contrast }}>{item.nome}</Text>
                            <Text style={{ color: item.color.contrast }}>{item.pontos} Pontos</Text>
                        </View>
                    </View>
                </Card.Content>

                {/* Controles */}
                <Card.Actions>
                    {fase == 1 && <BetSelector player={item} />}
                    {fase == 2 && <Button mode="contained" onPress={() => score(item.nome)}>Pontuar</Button>}
                </Card.Actions>
            </Card>
        )} />
    )
}

export default Players