import { useState } from "react";
import Square from "./Square"
import CalculateWinner from "./CalculateWinner"
import "./Board.css"
function Board(){

    const [squares,setSquares] = useState(Array(9).fill(null))

    const [xIsNext,setXIsNext] = useState(true);

    const [count, setCount] = useState(0); 

    function handleClick(i){
        
      if (CalculateWinner(squares) || squares[i]) {
            return;
          }
        squares[i] = xIsNext?"X":"O";
        
        setXIsNext(!xIsNext);
        
        setCount(count+1);
        console.log(count);
    }
    
    function renderSquare(i){
        return <Square value={squares[i]} onClick={()=>handleClick(i)} />;
    }

    const winner = CalculateWinner(squares);

    let status;

    if(winner){
        status ='Winner :' + winner;
    }else if(count===9 && !winner){
     status= 'Match Tied';  
    }else{
        status= 'Next Player :' + (xIsNext?'X':'O');
    }

    return (
        <div className="board">
          <div className="headline"><h2>Tic-Tac-Toe(ReactJS) #AG</h2></div>
          <div className="status">{status}</div>
          <div className="table">
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
          </div>
        </div>
      );
}

export default Board;
