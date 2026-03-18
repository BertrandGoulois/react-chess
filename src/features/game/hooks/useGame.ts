import { useGameStore } from "../store/gameStore";
import { useRef } from "react";

export const useGame = () => {
  const { game, selectedSquare, selectSquare, makeMove } = useGameStore();
  const legalSquares: string[] = selectedSquare
    ? game
        .moves({ square: selectedSquare as any, verbose: true })
        .map((m) => m.to)
    : [];
  const dragFromSquare = useRef<string | null>(null);

  const handleDragStart = (square: string) => {
    dragFromSquare.current = square;
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (square: string) => {
    if (!dragFromSquare.current) return;
    makeMove(square, dragFromSquare.current);
    dragFromSquare.current = null;
  };

  const isFlipped = game.turn() === "b";

  const handleSquareClick = (square: string) => {
    if (!selectedSquare) {
      const piece = game.get(square as any);
      const isOwnPiece = piece && piece.color === game.turn();
      if (!isOwnPiece) return;
      selectSquare(square);
      return;
    }

    if (square === selectedSquare) {
      selectSquare(null);
      return;
    }

    const piece = game.get(square as any);
    const isOwnPiece = piece && piece.color === game.turn();

    if (isOwnPiece) {
      selectSquare(square);
      return;
    }

    makeMove(square);
  };

  return {
    game,
    selectedSquare,
    handleSquareClick,
    legalSquares,
    isFlipped,
    handleDragStart,
    handleDragOver,
    handleDrop,
  };
};
