import React, { useState } from 'react'
import { Plus, X } from 'react-feather';

import './AddCard.css';

const AddCard = (props) => {

    const [showAdd, setShowAdd] = useState(false);
    const [cardTitle, setCardTitle] = useState("Demo card title")

    const handleAddCardInBoard = (event) =>{
        event.stopPropagation();
        let tempBoardList = [...props.boardData];
    
        const boardIndex = tempBoardList.findIndex((board) => board.id === props.boardId);
        if(boardIndex < 0) return;

        const card = {
            id:`card${tempBoardList[boardIndex].cards.length+1}${boardIndex}`,
            title:cardTitle,
            lables:[],
            tasks:[],
            description:"",
            date:""
        }

        tempBoardList[boardIndex].cards.push(card);
        props.setBoardData(tempBoardList);

        setCardTitle("Demo card title");
        setShowAdd(false);
    }

  return (
    <>
    {
        showAdd ? 
            <div className='add_card'>
                <p className='add_card_heading'>Add Card</p>
                <form className='card_details'
                    onSubmit={(event) =>{
                        event.stopPropagation();
                        handleAddCardInBoard(event);
                    }}
                >
                    <input autoFocus type='text' placeholder='add card item' value={cardTitle} onChange={(e)=>setCardTitle(e.target.value)}/>
                    <div className='add_card_footer'>
                        <button type='submit' onSubmit={(e)=>handleAddCardInBoard(e)}>Add</button>
                        <X onClick={()=>
                            setShowAdd(false)
                        }/>
                    </div>
                </form>
            </div>
        :
        <button className='add_card_btn' onClick={()=>
            setShowAdd(true)
        }>
            <Plus/>
            Add Item
        </button>
    }
    </>
  )
}

export default AddCard
