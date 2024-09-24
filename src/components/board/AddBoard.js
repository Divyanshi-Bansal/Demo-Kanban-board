import React, { useState } from 'react'
import { Plus, X } from 'react-feather';
import './AddBoard.css';

const AddBoard = (props) => {
    const [showAdd, setShowAdd] = useState(false);
    const [boardTitle, setBoardTitle] = useState("Demo Board Title")

    const handleAddBoard = (event) =>{

        let tempList = [...props.boardData];

        const board = tempList.find((board) => board.title === boardTitle);
        if(board) return;

        const boardNew = {
            id:`board${tempList.length+1}`,
            title:boardTitle,
            cards:[]
        }

        tempList.push(boardNew);
        
        props.setBoardData(tempList);
        setBoardTitle("Demo Board Title");
        setShowAdd(false);
    }
    
    return (
      <>
      {
          showAdd ? 
              <div className='add_board'>
                  <p className='add_board_heading'>Add Board</p>
                  <form className='board_details'
                      onSubmit={(event) =>{
                        event.preventDefault();
                        handleAddBoard(event);
                    }}
                  >
                      <input autoFocus type='text' placeholder='add board item' value={boardTitle} onChange={(e) => setBoardTitle(e.target.value)}/>
                      <div className='add_board_footer'>
                          <button type='submit' onClick={(event)=> handleAddBoard(event)}>Add</button>
                          <X onClick={()=>
                              setShowAdd(false)
                          }/>
                      </div>
                  </form>
              </div>
          :
          <button className='add_board_btn' onClick={()=>
              setShowAdd(true)
          }>
              <Plus/>
              Add Board
          </button>
      }
      </>
    )
  }
  

export default AddBoard
