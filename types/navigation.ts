import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type GameNavigation = {
    home: undefined,
    cadastro: undefined,
    game: undefined,
    fim: undefined
}

type GameNavigationProp = NativeStackNavigationProp<GameNavigation>;

export type { GameNavigation, GameNavigationProp };