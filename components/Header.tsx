import React from "react"

import { useNavigation } from "@react-navigation/native"
import { Appbar } from "react-native-paper"

type HeaderProps = {
    title?: string,
    actions?: Action[]
}

type Action = {
    icon: string,
    onPress: () => void
}

const Header = ({ title, actions }: HeaderProps) => {

    // Busca navegação da tela pai
    const navigation = useNavigation()

    return (
        <Appbar.Header>
            {navigation.canGoBack() && <Appbar.BackAction onPress={() => navigation.goBack()} />}
            <Appbar.Content title={title} />

            {/* Concatena ações para o cabeçalho */}
            {actions?.map((action) => (
                <Appbar.Action key={actions.indexOf(action)} icon={action.icon} onPress={action.onPress} />
            ))}
        </Appbar.Header>
    )
}

export default Header