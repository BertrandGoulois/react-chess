interface PieceProps {
  type: string;
  color: string;
  isFlipped: boolean;
}

export const Piece = ({ type, color, isFlipped }: PieceProps) => {
  const name = `${color}${type}`;

  return (
    <img
      src={`/pieces/${name}.svg`}
      alt={name}
      style={{ transform: isFlipped ? "rotate(180deg)" : "none" }}
    />
  );
};
