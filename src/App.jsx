
import Player from './components/player.jsx'
function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
         <Player name="Player 1" symbol="x" />
          <Player name="Player 2" symbol="o" />
        </ol>
        Games
      </div>
      LOG
    </main>
  )
}

export default App
