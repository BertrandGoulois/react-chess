interface SquareProps {
  square: string;
  isSelected: boolean;
  onClick: () => void;
  children?: React.ReactNode;
}

export const Square = ({ square: _square, isSelected, onClick, children }: SquareProps) => {
  return (
    <div
      data-testid="square"
      data-selected={isSelected}
      onClick={onClick}
    >
      {children}
    </div>
  );
};