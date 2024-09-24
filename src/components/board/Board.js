import React, { useEffect, useState } from 'react';
import './Board.css';
import Card from '../card/Card';
import {MoreHorizontal} from 'react-feather';
import AddCard from '../card/AddCard';
import Dropdown from '../dropdown/Dropdown';

const Board = (props) => {

  const [showTopMoreDropdown, setShowTopMoreDropdown] = useState(false);
  useEffect(()=>{
    console.log(showTopMoreDropdown);
  });

  const handleDeleteBoardFunc = () =>{
    let tempList = [...props.boardData];

    const boardIndex = tempList.findIndex((board) => board.id === props.board.id);
    if(boardIndex < 0) return;

    tempList.splice(boardIndex,1);
    props.setBoardData(tempList);
    
  }

  const DummyEmptyCard = {
    id:"dummyCard",
    text:"",
    tasks:[],
    title:"",
    labels:[],
    description:"",
    date:""
  }

  return (
    <div className='board'>
      <div className='board_top'>
        <p className='board_top_title'>{props.board ? props.board.title : "Board Title"}</p>
        <span className='board_top_count'>{props.board ? props.board.cards.length : 0}</span> 
        <div className='board_top_more' onClick={(e)=>{
          e.stopPropagation();
          setShowTopMoreDropdown(true);
          }}>
          <MoreHorizontal/>
          {showTopMoreDropdown && 
            <Dropdown onCloseFunc={() =>{
              setShowTopMoreDropdown(false);
            }}>
              <div className='board_dropdown'>
                <p onClick={()=>handleDeleteBoardFunc()}>Delete board</p>
              </div>
          </Dropdown> 
          } 
        </div>
      </div>
      <div className='board_cards custom-scroll'>
        {
          props.board?.cards?.length>0 ?  props.board.cards.map((card) => {
            return(
              <Card 
                key={card.id} 
                card={card} 
                boardId={props.board.id} 
                setBoardData={props.setBoardData} 
                boardData={props.boardData}
                handleDragEnd={props.handleDragEnd}
                handleDragEnter={props.handleDragEnter}
              />
            )
          }) : 
          <Card 
            key="emptyCard" 
            boardId={props.board.id} 
            handleDragEnd={props.handleDragEnd}
            handleDragEnter={props.handleDragEnter}
            setBoardData={props.setBoardData} 
            boardData={props.boardData}
          />
        }
        <AddCard boardId={props.board.id} setBoardData={props.setBoardData} boardData={props.boardData}/>
      </div>
    </div>
  )
}

export default Board
