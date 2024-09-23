import { useEffect, useState } from 'react';
import './App.css';
import AddBoard from './components/board/AddBoard';
import Board from './components/board/Board';
import BoardData from './data/BoardData';

function App() {

  const [boardData, setBoardData] = useState(BoardData);

  useEffect(()=>{
    console.log("board data in app js: ", boardData);
    // setBoardData(...boardData, {
    //   id:new Date()+Math.random()*2,
    //   title:"Demo demo board title",
    //   cards:[]
    // })
  }, [boardData]);

  const handleAddBoard = (title) =>{
    const board = BoardData.find((board) => board.title === title);
    if(board) return;

    const boardNew = {
        id:new Date() + Math.random()*2,
        title:title,
        cards:[]
    }

    BoardData.push(boardNew);
    
}

  return (
    <div className="app">
      <div className="navbar">
        <h2>Kanban board</h2>
      </div>
      <div className="outer">
        <div className="boards">
          {
            boardData.map((board)=>{
              return (
                <Board key={board.id} board={board} setBoardData={setBoardData} boardData={boardData}/>
              )
            })
          }
          <AddBoard setBoardData={setBoardData} boardData={boardData}/>
        </div>
      </div>
    </div>
  );
}

export default App;
