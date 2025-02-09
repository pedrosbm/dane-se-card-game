import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { Text, Button, TextInput, useTheme } from "react-native-paper";
import { GameContext } from "../context/GameContext";
import { Modal, Portal } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { GameNavigationProp } from "../types/navigation";
import Players from "../components/Players";
import Header from "../components/Header";

const Cadastro = () => {
    // States
    const [visible, setVisible] = useState<boolean>(false)
    const [nome, setNome] = useState<string>("")

    // Contexto de jogo
    const { newPlayer, players } = useContext(GameContext)

    // Hooks
    const navigation = useNavigation<GameNavigationProp>()
    const theme = useTheme()

    // Header
    useEffect(() => {
        navigation.setOptions(({header: () => <Header title="Novo jogo" buttons={[{icon:"plus", onPress:() => setVisible(true), text: "Novo jogador"}]}/>}))
    }, [])

    const addPlayer = () => {
        newPlayer(nome)
        setNome("")
        setVisible(false)
    }

    return (
        <View style={{ height: "100%", padding: 10, backgroundColor: theme.colors.background }}>
            {players.length > 1 ?
                <Button style={{ marginBottom: 10 }} mode="contained" onPress={() => navigation.navigate("game")}>Jogar</Button> : <Text>É necessário ter 2 jogadores ou mais</Text>}

            {/* Modal de criação de jogador */}
            <Portal>
                <Modal visible={visible} onDismiss={() => setVisible(false)} contentContainerStyle={{ margin: 20, padding: 20, backgroundColor: "white" }} >
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