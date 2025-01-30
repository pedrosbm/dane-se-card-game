import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { Text, Button, TextInput } from "react-native-paper";
import { GameContext } from "../context/GameContext";
import { Modal, Portal } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { GameNavigationProp } from "../types/navigation";
import Players from "../components/Players";

const Cadastro = () => {
    const [visible, setVisible] = useState<boolean>(false)
    const [nome, setNome] = useState<string>("")

    const { newPlayer, players } = useContext(GameContext)

    const modalStyle = { margin: 20, padding: 20, backgroundColor: "white" }

    const navigation = useNavigation<GameNavigationProp>()

    useEffect(() => {
        navigation.setOptions({
            // Abre modal
            headerRight: () => (
                <Button icon="plus" mode="text" onPress={() => setVisible(true)}>
                    Novo jogador
                </Button>
            )
        })
    }, [])

    const addPlayer = () => {
        newPlayer(nome)
        setNome("")
        setVisible(false)
    }

    return (
        <View style={{ padding: 10 }}>
            {players.length > 1 ?
                <Button style={{ marginBottom: 10 }} mode="contained" onPress={() => navigation.navigate("game")}>Jogar</Button> : <Text>É necessário ter 2 jogadores ou mais</Text>}

            {/* Modal de criação de jogador */}
            <Portal>
                <Modal visible={visible} onDismiss={() => setVisible(false)} contentContainerStyle={modalStyle} >
                    <View>
                        <View>
                            <TextInput
                                label="Nome"
                                value={nome}
                                onChangeText={setNome}
                                mode="outlined"
                            />
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 10, marginTop: 10 }}>
                            <Button mode="outlined" onPress={() => setVisible(false)}>Cancelar</Button>
                            <Button mode="contained" onPress={() => addPlayer()}>Confirmar</Button>
                        </View>
                    </View>
                </Modal>
            </Portal>

            {/* lista de jogadores */}
            <Players removable={true} />

        </View>
    )
}

export default Cadastro;