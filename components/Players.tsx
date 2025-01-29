import React, { useContext } from "react"
import { Button, FlatList, Text, View } from "react-native"
import { GameContext } from "../context/GameContext"
import BetSelector from "./BetSelector"
import { Icon } from "react-native-paper"

type PlayersProps = {
    removable: boolean
}

const Players = ({ removable }: PlayersProps) => {

    const { removePlayer, players, score, fase } = useContext(GameContext)

    return (
        <FlatList contentContainerStyle={{ display: "flex", gap: 5 }} data={players} renderItem={({ item }) => (
            <View style={{ padding: 5, backgroundColor: item.color.value }}>
                {removable && <Button onPress={() => removePlayer(item.nome)} title="remover" />}

                {/* Jogador */}
                <View>
                    {/* TODO achar um ícone bom */}
                    <Icon source={"avatar"} size={20} />
                    <View>
                        <Text style={{ color: item.color.contrast }}>{item.nome}</Text>
                        <Text style={{ color: item.color.contrast }}>{item.pontos}</Text>
                    </View>
                </View>

                {/* Controles */}
                <View>
                    {fase == 1 && <BetSelector player={item} />}
                    {fase == 2 && <Button onPress={() => score(item.nome)} title="Pontuar" />}
                </View>
            </View>
        )} />
    )
}

export default Players