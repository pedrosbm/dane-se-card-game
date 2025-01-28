import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type GameNavigation = {
    home: undefined;
    cadastro: undefined;
}

type GameNavigationProp = NativeStackNavigationProp<GameNavigation>;

export type { GameNavigation, GameNavigationProp };