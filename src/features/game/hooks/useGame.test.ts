import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useGameStore } from '../store/gameStore';
import { useGame } from './useGame';

describe('useGame', () => {
  beforeEach(() => {
    useGameStore.getState().resetGame();
  });

  it('should select a square on first click', () => {
    const { result } = renderHook(() => useGame());
    act(() => result.current.handleSquareClick('e2'));
    expect(useGameStore.getState().selectedSquare).toBe('e2');
  });

  it('should make a move on second click', () => {
    const { result } = renderHook(() => useGame());
    act(() => result.current.handleSquareClick('e2'));
    act(() => result.current.handleSquareClick('e4'));
    const { selectedSquare, game } = useGameStore.getState();
    const ranks = game.fen().split(' ')[0].split('/');
    expect(ranks[4]).toBe('4P3');
    expect(selectedSquare).toBeNull();
  });

  it('should deselect on second click on same square', () => {
    const { result } = renderHook(() => useGame());
    act(() => result.current.handleSquareClick('e2'));
    act(() => result.current.handleSquareClick('e2'));
    expect(useGameStore.getState().selectedSquare).toBeNull();
  });

  it('should change selection on second click on own piece', () => {
    const { result } = renderHook(() => useGame());
    act(() => result.current.handleSquareClick('e2'));
    act(() => result.current.handleSquareClick('d2'));
    expect(useGameStore.getState().selectedSquare).toBe('d2');
  });
});