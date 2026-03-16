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
    it('should select a square', () => {
        useGameStore.getState().selectSquare('e2');
        const { selectedSquare } = useGameStore.getState();
        expect(selectedSquare).toBe('e2');
    });

    it('should deselect a square when reset', () => {
        useGameStore.getState().selectSquare('e2');
        useGameStore.getState().resetGame();
        const { selectedSquare } = useGameStore.getState();
        expect(selectedSquare).toBeNull();
    });

    it('should make a move and update the game state', () => {
        useGameStore.getState().selectSquare('e2');
        useGameStore.getState().makeMove('e4');
        const { game, selectedSquare } = useGameStore.getState();
        const ranks = game.fen().split(' ')[0].split('/');
        expect(ranks[4]).toBe('4P3');
        expect(selectedSquare).toBeNull();
    });
});