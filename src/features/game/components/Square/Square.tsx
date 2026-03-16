import * as styles from './Square.css';

interface SquareProps {
    square: string;
    isSelected: boolean;
    isLight: boolean;
    onClick: () => void;
    children?: React.ReactNode;
}

export const Square = ({ square: _square, isSelected, isLight, onClick, children }: SquareProps) => {
    return (
        <div
            data-testid="square"
            data-selected={isSelected}
            className={`${styles.baseSquareStyle} ${styles.squareColorVariants[isLight ? 'light' : 'dark']}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
};