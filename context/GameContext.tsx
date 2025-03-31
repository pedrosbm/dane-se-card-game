import React from "react";

import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { Player } from "../types/player";
import { GameContextType } from "../types/gameContext";

const GameContext = createContext<GameContextType>({} as GameContextType);

const GameProvider = ({ children }: PropsWithChildren) => {
    // Estados gerenciados pelo contexto de jogo
    const [players, setPlayers] = useState<Player[]>([]);
    const [round, setRound] = useState<number>(0);
    const [fase, setFase] = useState<number>(0);

    const newPlayer = async (name: string) => {
        // Api de cores
        const color = await fetch("https://www.thecolorapi.com/random")
            .then(response => { return response.json() })
            .then(json => { return { value: json.hex.value, contrast: json.contrast.value } })
            .catch(error => {return {value: "#fff", contrast: "#999" }})

        setPlayers([...players, {
            nome: name,
            pontos: 0,
            color: color,
            aposta: 0
        }])
    }

    const removePlayer = (name: string) => {
        setPlayers(players.filter(player => player.nome !== name));
    }

    const setBet = (name: string, bet: number) => {
        const updatedPlayers = players.map(player => (
            player.nome === name ? { ...player, aposta: bet } : player
        ))
        setPlayers(updatedPlayers)
    }

    const resetBet = () => {
        const updatedPlayers = players.map(player => ({ ...player, aposta: 0 }))

        setPlayers(updatedPlayers)
    }

    const score = (name: string) => {
        const updatedPlayers = players.map(player =>
            player.nome === name ? { ...player, pontos: player.pontos + player.aposta + 10 } : player
        )
        setPlayers(updatedPlayers)
    }
    
    const unscore = (name: string) => {
        const updatedPlayers = players.map(player =>
            player.nome === name ? { ...player, pontos: player.pontos - player.aposta - 10 } : player
        )
        setPlayers(updatedPlayers)
    }

    return (
        <GameContext.Provider
            value={{
                players, round, newPlayer, setRound, removePlayer, fase, setFase, score, setBet, resetBet, setPlayers, unscore
            }}>
            {children}
        </GameContext.Provider>
    )
}

export { GameContext, GameProvider };