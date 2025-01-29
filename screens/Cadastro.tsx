import React, { useContext, useState } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";
import { GameContext } from "../context/GameContext";
import { Modal, Portal } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { GameNavigationProp } from "../types/navigation";
import Players from "../components/Players";

const Cadastro = () => {
    const [visible, setVisible] = useState<boolean>(false)
    const [nome, setNome] = useState<string>("")

    const { newPlayer, players } = useContext(GameContext)

    const modalStyle = { padding: 20, backgroundColor: "white" }

    const navigate = useNavigation<GameNavigationProp>().navigate

    const addPlayer = () => {
        newPlayer(nome)
        setNome("")
        setVisible(false)
    }

    return (
        <View>
            <Text>Cadastro</Text>
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
                <Players removable={true} punctuable={false}/>
            </View>

            {players.length > 1 ?
                <Button onPress={() => navigate("game")} title="Jogar" /> : <Text>É necessário ter 2 jogadores ou mais</Text>}
        </View>
    )
}

export default Cadastro;