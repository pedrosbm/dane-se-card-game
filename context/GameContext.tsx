import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { Player } from "../types/player";

type GameContextType = {
    players: Player[],
    round: number,
    newPlayer: (name: string) => void,
    removePlayer: (name: string) => void,
    setRound: (round: number) => void
}

const GameContext = createContext<GameContextType>({} as GameContextType);

const GameProvider = ({ children }: PropsWithChildren) => {
    const [players, setPlayers] = useState<Player[]>([]);
    const [round, setRound] = useState<number>(0);

    const newPlayer = async (name: string) => {
        // Api de cores
        const color = await fetch("https://www.thecolorapi.com/random")
            .then(response => { return response.json() })
            .then(json => { return json.hex.value })
 
        setPlayers([...players, {
            nome: name,
            pontos: 0,
            color: color,
            aposta: 0
        }])
    }

    const removePlayer = (name: string) => {
        players.splice(players.indexOf({ nome: name } as Player), 1)
    }

    return (
        <GameContext.Provider value={{ players, round, newPlayer, setRound, removePlayer }}>
            {children}
        </GameContext.Provider>
    )
}

export { GameContext, GameProvider };