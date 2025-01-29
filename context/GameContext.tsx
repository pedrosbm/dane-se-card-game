import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { Player } from "../types/player";

type GameContextType = {
    players: Player[],
    round: number,
    fase: number,
    newPlayer: (name: string) => void,
    removePlayer: (name: string) => void,
    setFase: (fase: number) => void,
    setRound: (round: number) => void,
    score: (name: string) => void
}

const GameContext = createContext<GameContextType>({} as GameContextType);

const GameProvider = ({ children }: PropsWithChildren) => {
    // Estados gerenciados pelo contexto de jogo
    const [players, setPlayers] = useState<Player[]>([]);
    const [round, setRound] = useState<number>(1);
    const [fase, setFase] = useState<number>(1);

    /**
     * Função para adicionar jogadores ao jogo.
     * @param name Nome do jogador a ser adicionado.
     */
    const newPlayer = async (name: string) => {
        // Api de cores
        const color = await fetch("https://www.thecolorapi.com/random")
            .then(response => { return response.json() })
            .then(json => { return { value: json.hex.value, contrast: json.contrast.value } })

        setPlayers([...players, {
            nome: name,
            pontos: 0,
            color: color,
            aposta: 0
        }])
    }

    /**
     * Função pra remover jogadores do jogo.
     * @param name Nome do jogador a ser removido
     */
    const removePlayer = (name: string) => {
        setPlayers(players.filter(player => player.nome !== name));
    }

    /**
     * Função pra pontuar com base no nome do jogador e o seu valor da aposta na rodada.
     * @param name Nome do jogador a ser pontuado
     */
    const score = (name: string) => {
        const updatedPlayers = players.map(player =>
            player.nome === name ? { ...player, pontos: player.pontos + player.aposta + 10 } : player
        );
        setPlayers(updatedPlayers);
    }

    return (
        <GameContext.Provider
            value={{
                players, round, newPlayer, setRound, removePlayer, fase, setFase, score
            }}>
            {children}
        </GameContext.Provider>
    )
}

export { GameContext, GameProvider };