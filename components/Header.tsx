import React, { PropsWithChildren } from "react"

import { useNavigation } from "@react-navigation/native"
import { View } from "react-native"
import { GameNavigationProp } from "../types/navigation"
import { Button, IconButton, Text, useTheme } from "react-native-paper"

type HeaderProps = {
    title: string,
    buttons: [{
        icon: string,
        onPress: () => void,
        text?: string
    }]
}

const Header = ({ title, buttons }: HeaderProps) => {
    const navigation = useNavigation<GameNavigationProp>()

    const theme = useTheme()
    return (
        <View style={{ padding: 10, justifyContent: "space-between", flexDirection: "row", height: 60, width: "100%", backgroundColor: theme.colors.elevation.level1 }}>
            {/* Header left */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <IconButton onPress={() => navigation.goBack()} icon={"arrow-left"} />
                <Text variant="titleMedium">{title}</Text>
            </View>

            {buttons.map(button => (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Button mode="contained-tonal" onPress={button.onPress} icon={button.icon}>
                        {button.text}
                    </Button>
                </View>
            ))}
        </View>
    )
}

export default Header