import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type GameNavigation = {
    // TODO implementar nova extrutura de telas do jogo principal
}
type GameNavigationProp = NativeStackNavigationProp<GameNavigation>;

type SignUpNavigation = {
    home: undefined,
    cadastro: undefined
}

type SignUpNavigationProp = NativeStackNavigationProp<SignUpNavigation>


export type { GameNavigation, GameNavigationProp, SignUpNavigation, SignUpNavigationProp};