import React,{useState} from 'react'
import Board from '../Board/Board'
import './style.css'
import Player from '../Player/Player'
import { PlayerList } from '..';
const board = Array(9).fill(null);

const Game=()=>{
  
  const [gameState,setGameState] = useState(board)
  const [move, setMove] = useState(true)


  const handleClick = (index) => {
    // console.log("BOARD    " + currentState)
    if(gameState[index] || checkWinner()) return;
    gameState[index] = move ? "X" : "O"
    // console.log("game STATE    " + gameState)
    setGameState(gameState)
    setMove(!move)

  }

  const checkWinner = () => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    console.log('Class: App, Function: checkWinner ==', gameState[0], gameState[1], gameState[2]);
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            return gameState[a];
        }
    }
    return null;
}

  const clearGame = () =>{
    setGameState(Array(9).fill(null))
    // console.log('BOARBOARD',board)
  }

  return(
    <>
      <h1>.·* TIC TAC TOE *·.</h1>
      <Board squares={gameState} onClick={handleClick}/>
      <button className="clearButton" onClick={clearGame}>New Game</button>
      <h3>WINNER: {checkWinner() ? checkWinner():""}</h3>
      <PlayerList />
    </>
  )
}

export default Game