import { useGame } from '../../hooks/useGame';

const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const ranks = [8, 7, 6, 5, 4, 3, 2, 1];

const squares = ranks.flatMap(rank =>
  files.map(file => `${file}${rank}`)
);

export const Board = () => {
  const { handleSquareClick } = useGame();

  return (
    <div>
      {squares.map(square => (
        <div
          key={square}
          data-testid="square"
          onClick={() => handleSquareClick(square)}
        >
          {square}
        </div>
      ))}
    </div>
  );
};