import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { Player } from "../types/player";
import { GameContextType } from "../types/gameContext";

const GameContext = createContext<GameContextType>({} as GameContextType);

const GameProvider = ({ children }: PropsWithChildren) => {
    // Estados gerenciados pelo contexto de jogo
    const [players, setPlayers] = useState<Player[]>([]);
    const [round, setRound] = useState<number>(0);
    const [fase, setFase] = useState<number>(0);

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
     * Função que muda a aposta atual do jogador.
     * @param name Nome do jogador a apostar
     * @param bet Número de jogos ganhos que o jogador irá apostar
    */
    const setBet = (name: string, bet: number) => {
        const updatedPlayers = players.map(player => (
            player.nome === name ? { ...player, aposta: bet } : player
        ))
        setPlayers(updatedPlayers)
    }

    /**
     * Reseta o valor da aposta por rodada.
     */
    const resetBet = () => {
        const updatedPlayers = players.map(player => ({ ...player, aposta: 0 }))

        setPlayers(updatedPlayers)
    }

    /**
     * Função pra pontuar com base no nome do jogador e o seu valor da aposta na rodada.
     * @param name Nome do jogador a ser pontuado
    */
    const score = (name: string) => {
        const updatedPlayers = players.map(player =>
            player.nome === name ? { ...player, pontos: player.pontos + player.aposta + 10 } : player
        )
        setPlayers(updatedPlayers)
    }

    return (
        <GameContext.Provider
            value={{
                players, round, newPlayer, setRound, removePlayer, fase, setFase, score, setBet, resetBet
            }}>
            {children}
        </GameContext.Provider>
    )
}

export { GameContext, GameProvider };