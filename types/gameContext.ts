import { Player } from "./player"

type GameContextType = {
    players: Player[],
    round: number,
    fase: number,
    newPlayer: (name: string) => void,
    removePlayer: (name: string) => void,
    setBet: (name: string, bet: number) => void,
    resetBet: () => void,
    setFase: (fase: number) => void,
    setRound: (round: number) => void,
    score: (name: string) => void
}

export type { GameContextType }