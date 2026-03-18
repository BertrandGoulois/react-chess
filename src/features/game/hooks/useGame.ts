import { useGameStore } from '../store/gameStore';

export const useGame = () => {
    const { game, selectedSquare, selectSquare, makeMove } = useGameStore();

    const legalSquares: string[] = selectedSquare
        ? game.moves({ square: selectedSquare as any, verbose: true }).map(m => m.to)
        : []

    const isFlipped = game.turn() === 'b';

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

    return { game, selectedSquare, handleSquareClick, legalSquares, isFlipped };
};