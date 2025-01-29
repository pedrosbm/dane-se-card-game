import React, { useContext, useState } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";
import { GameContext } from "../context/GameContext";
import { Modal, Portal } from "react-native-paper";

const Cadastro = () => {
    const [visible, setVisible] = useState<boolean>(false)
    const [nome, setNome] = useState<string>("")

    const { players, newPlayer } = useContext(GameContext)

    const modalStyle = { padding: 20, backgroundColor: "white" }

    const addPlayer = () => {
        newPlayer(nome)
        setNome("")
        setVisible(false)
    }

    return (
        <View>
            <Text>Game</Text>
            {/* Modal de criação de jogador */}
            <Portal>
                <Modal visible={visible} onDismiss={() => setVisible(false)} contentContainerStyle={modalStyle} >
                    <View>
                        <View>
                            <TextInput onChangeText={setNome} value={nome} />
                        </View>
                        <View>
                            <Button title="cancelar" onPress={() => setVisible(false)} />
                            <Button title="confirmar" onPress={() => addPlayer()} />
                        </View>
                    </View>
                </Modal>
            </Portal>

            <View>
                {/* Abre modal */}
                <Button title="Novo jogador" onPress={() => setVisible(true)} />

                {/* lista de jogadores */}
                <FlatList data={players} renderItem={({ item }) => (
                    <View>
                        <Text>{item.nome}</Text>
                    </View>
                )} />
            </View>

        </View>
    )
}

export default Cadastro;