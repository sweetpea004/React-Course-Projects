export default function GameBoard({ onSelectSquare, board }) {
    return(
        <ol id="game-board">
            {board.map((row, rowInd) => (
                <li key={rowInd}>
                    <ol>
                        {row.map((symbol, colInd) => (
                            <li key={colInd}>
                                <button 
                                    onClick={() => onSelectSquare(rowInd, colInd)} 
                                    disabled={symbol !== null}
                                >
                                    {symbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}