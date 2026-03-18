interface PieceProps {
  type: string;
  color: string;
  isFlipped: boolean;
  onDragStart: () => void;
}

export const Piece = ({ type, color, isFlipped, onDragStart }: PieceProps) => {
  const name = `${color}${type}`;

  return (
    <img
      src={`/pieces/${name}.svg`}
      alt={name}
      style={{ transform: isFlipped ? "rotate(180deg)" : "none" }}
      draggable={true}
      onDragStart={onDragStart}
    />
  );
};
