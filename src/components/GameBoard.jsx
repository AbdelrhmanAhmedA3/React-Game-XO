import { useState } from 'react';

const initializeBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({onSelect, activePlayerSymbol}) {
    const [gameBoard,setGameBoard] = useState(initializeBoard)
    function handleSelectSquare (rowIndex,cellIndex){
        setGameBoard((prevGameBoard)=>{
            const updatedBoard = [...prevGameBoard.map((innerArray)=> [...innerArray])]
            updatedBoard[rowIndex][cellIndex] = activePlayerSymbol
           return updatedBoard;

        })
        onSelect()
    }
    return (
        <ol id="game-board"> 
     {gameBoard.map((row , rowIndex) => (
        <li key={rowIndex}>
            <ol>
                {row.map((cell, cellIndex) => (
                    <li key={cellIndex}>
                       <button onClick={() =>handleSelectSquare(rowIndex, cellIndex)}>
                        
                        {cell}
                        </button> 
                    </li>
                ))}
            </ol>
        </li>
    ))}
        </ol> 
    ) 
}