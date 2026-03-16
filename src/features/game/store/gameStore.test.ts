import { describe, it, expect, beforeEach } from 'vitest';
import { useGameStore } from './gameStore';

describe('gameStore', () => {
  beforeEach(() => {
    useGameStore.getState().resetGame();
  });

  it('should initialize with a valid chess game', () => {
    const { game } = useGameStore.getState();
    expect(game).toBeDefined();
    expect(game.fen()).toBe('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
  });

  it('should initialize with no selected square', () => {
    const { selectedSquare } = useGameStore.getState();
    expect(selectedSquare).toBeNull();
  });
});