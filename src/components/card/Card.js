import React, { useEffect, useState } from 'react';
import './Card.css';
import { CheckSquare, Clock, MoreHorizontal } from 'react-feather';
import Chip from '../chip/Chip';
import Dropdown from '../dropdown/Dropdown';

const Card = (props) => {

  const [showCardDropdown, setShowCardDropdown] = useState(false);

  const handleDeleteCardFunc = () =>{
    let tempList = [...props.boardData];

    const boardIndex = tempList.findIndex((board) => board.id === props.boardId);
    if(boardIndex < 0) return;

    const cardIndex = tempList[boardIndex].cards.findIndex((card)=> card.id === props.card.id);
    if(cardIndex < 0) return;
    
    tempList[boardIndex].cards.splice(cardIndex, 1);
    props.setBoardData(tempList);
    
  }

  return (
    <div className='card' draggable 
        onDragEnd={()=>props.handleDragEnd(props.card ? props.card.id : -1, props.boardId)}
        onDragEnter={()=>props.handleDragEnter(props.card?.id, props.boardId)}
        >
          {
            props.card ? 
            <>
            <div className='card_top'>
              {
                props.card?.labels?.length > 0 &&
                <div className='card_top_labels'>
                  {
                    props.card.labels.map((label, index)=>{
                      return(
                        <Chip key={index} text={label.text} color={label.color} />
                      )
                    })
                  }
              </div>
              }
              <div className='card_top_more' onClick={(e)=>{
                e.stopPropagation();
                setShowCardDropdown(true);
                }}>
                <MoreHorizontal className='card_top_more_icon'/>
                {showCardDropdown && <Dropdown onCloseFunc={()=>{
                  setShowCardDropdown(false)
                }}>
                  <div className='card_dropdown'>
                    <p onClick={()=> handleDeleteCardFunc()}>Delete Card</p>
                  </div>
                </Dropdown>}
              </div>
            </div>
      
          <div className='card_title'>
            {props.card?.title}
          </div>
          <div className='card_footer'>
            {props.card?.date && 
              <p>
                <Clock/>
                {props.card?.date}
              </p>
            }
            <p>
                <CheckSquare/>
                1/4
            </p>
          </div>
          </>
          :
          <p className='card_title'> no cards here</p>
          }
    
    </div>
  )
}

export default Card
