interface PieceProps {
  type: string;
  color: string;
}

export const Piece = ({ type, color }: PieceProps) => {
  const name = `${color}${type}`;

  return (
    <img
      src={`/pieces/${name}.svg`}
      alt={name}
    />
  );
};