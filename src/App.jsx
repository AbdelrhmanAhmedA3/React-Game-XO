
import { useState } from 'react';
import GameBoard from './components/GameBoard.jsx';
import Player from './components/Player.jsx';

function App() {
  const [activePlayer , setActivePlayer] = useState('X')

  function handleSelectedSquare (){
    setActivePlayer((curActivePlayer)=>(curActivePlayer === 'X'? 'O':'X'))
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player' >
         <Player initialName="Player 1" symbol="x" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="o"  isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelect={handleSelectedSquare} activePlayerSymbol={activePlayer} />
      </div>
      LOG
    </main>
  )
}

export default App
