import { create } from 'zustand';
import { Chess } from 'chess.js';

interface GameState {
  game: Chess;
  selectedSquare: string | null;
}

interface GameActions {
  selectSquare: (square: string) => void;
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
}));