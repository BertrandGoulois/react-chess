import { useGame } from "../../hooks/useGame";
import { Square } from "../Square/Square";
import { Piece } from "../Piece/Piece";
import * as styles from "./Board.css";

const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
const ranks = [8, 7, 6, 5, 4, 3, 2, 1];

const squares = ranks.flatMap((rank) => files.map((file) => `${file}${rank}`));

export const Board = () => {
  const { game, handleSquareClick, selectedSquare, legalSquares, isFlipped } =
    useGame();

  return (
    <div
      className={`${styles.boardStyle} ${isFlipped ? styles.flippedBoardStyle : ""}`}
    >
      {squares.map((square, index) => {
        const piece = game.get(square as any);
        const fileIndex = index % 8;
        const rankIndex = Math.floor(index / 8);
        const isLight = (fileIndex + rankIndex) % 2 === 0;
        return (
          <Square
            key={square}
            square={square}
            isSelected={selectedSquare === square}
            isLegal={legalSquares.includes(square)}
            isLight={isLight}
            onClick={() => handleSquareClick(square)}
          >
            {piece && (
              <Piece
                type={piece.type.toUpperCase()}
                color={piece.color}
                isFlipped={isFlipped}
              />
            )}
          </Square>
        );
      })}
    </div>
  );
};
