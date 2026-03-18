import { create } from "zustand";
import { Chess } from "chess.js";

interface GameState {
  game: Chess;
  selectedSquare: string | null;
}

interface GameActions {
  selectSquare: (square: string | null) => void;
  makeMove: (to: string, from?: string) => void;
  resetGame: () => void;
}

const getInitialState = (): GameState => ({
  game: new Chess(),
  selectedSquare: null,
});

export const useGameStore = create<GameState & GameActions>()((set) => ({
  ...getInitialState(),
  selectSquare: (square) => set({ selectedSquare: square }),
  resetGame: () => set(getInitialState()),
  makeMove: (to, from?) =>
    set((state) => {
      try {
        const game = new Chess(state.game.fen());
        game.move({ from: from ?? state.selectedSquare!, to });
        return { game, selectedSquare: null };
      } catch {
        return state;
      }
    }),
}));
