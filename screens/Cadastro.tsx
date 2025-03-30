import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { Text, Button, TextInput } from "react-native-paper";
import { Modal, Portal } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";
import { GameNavigationProp } from "../types/navigation";

import { GameContext } from "../context/GameContext";

// styles
import { modalStyle } from "../styles/ModalStyle";

import Players from "../components/Players";
import Header from "../components/Header";

const Cadastro = () => {
    const [visible, setVisible] = useState<boolean>(false)
    const [nome, setNome] = useState<string>("")

    const { newPlayer, players, setRound } = useContext(GameContext)

    const navigation = useNavigation<GameNavigationProp>()

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            header: () => <Header
                title="Jogadores"
                actions={[{
                    icon: "plus",
                    onPress: () => setVisible(true)
                }]} />
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
                <Button style={{ marginBottom: 10 }} mode="contained" onPress={() => setRound(1)}>Jogar</Button> : <Text>É necessário ter 2 jogadores ou mais</Text>
            }

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