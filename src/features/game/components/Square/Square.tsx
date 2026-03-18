import * as styles from "./Square.css";

interface SquareProps {
  square: string;
  isSelected: boolean;
  isLight: boolean;
  onClick: () => void;
  children?: React.ReactNode;
  isLegal?: boolean;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: () => void;
}

export const Square = ({
  square: _square,
  isSelected,
  isLight,
  onClick,
  children,
  isLegal,
  onDragOver,
  onDrop,
}: SquareProps) => {
  return (
    <div
      data-testid="square"
      data-selected={isSelected}
      className={`${styles.baseSquareStyle} ${styles.squareColorVariants[isLight ? "light" : "dark"]} 
      ${isSelected ? styles.selectedSquareStyle : isLegal ? styles.legalSquareStyle : ""}`}
      onClick={onClick}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      {children}
    </div>
  );
};
