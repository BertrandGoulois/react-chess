import { useGame } from '../../hooks/useGame';
import { Square } from '../Square/Square';
import { Piece } from '../Piece/Piece';

const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const ranks = [8, 7, 6, 5, 4, 3, 2, 1];

const squares = ranks.flatMap(rank =>
  files.map(file => `${file}${rank}`)
);

export const Board = () => {
  const { game, handleSquareClick, selectedSquare } = useGame();

  return (
    <div>
      {squares.map(square => {
        const piece = game.get(square as any);
        return (
          <Square
            key={square}
            square={square}
            isSelected={selectedSquare === square}
            onClick={() => handleSquareClick(square)}
          >
            {piece && <Piece type={piece.type.toUpperCase()} color={piece.color} />}
          </Square>
        );
      })}
    </div>
  );
};