import React, { useEffect, useState } from 'react'
import BoardData from '../../data/BoardData';
import Board from '../board/Board';
import AddBoard from '../board/AddBoard';

const MainBody = () => {
    const [boardData, setBoardData] = useState(BoardData);
    const [target, setTarget] = useState(
        {
          cid:"",
          bid:""
        }
    )

    const handleDragEnter = (cid, bid) =>{ //source: from where card is pickup
        console.log("card is pickup", bid, cid);
        setTarget({
          cid,
          bid
        });
        console.log("target value in drag enter: ", target.bid, target.cid);
      }
    
      const handleDragEnd = (sourceCardId, sourceBoardId) =>{ //target: where card is drop at
        console.log("target: ", target);
        const { cid: targetCid, bid: targetBid } = target;
        console.log("target value in drag end: ", targetCid, targetBid);
        if (targetBid === sourceBoardId && targetCid === sourceCardId) return;
        
        console.log("source card is about to drop", sourceBoardId, sourceCardId);
        let s_cIndex, s_bIndex, t_cIndex, t_bIndex;
    
        s_bIndex = boardData.findIndex((board)=> board.id === sourceBoardId);
        if(s_bIndex < 0) return;
    
        s_cIndex = boardData[s_bIndex].cards.findIndex((card)=>card.id===sourceCardId);
        if(s_cIndex < 0) return;
    
        console.log("target value in drag end: ", targetCid, targetBid);
    
        t_bIndex = boardData.findIndex((board)=> board.id === targetBid);
        if(t_bIndex < 0) return;
    
        // t_cIndex = boardData[t_bIndex].cards?.findIndex((card)=>card.id===target.cid);
        // if(t_cIndex < 0) return;
    
          // If no card ID in the target, append to the end
        t_cIndex = boardData[t_bIndex].cards.findIndex((card) => card.id === targetCid);
        if (t_cIndex < 0){
          t_cIndex = boardData[t_bIndex].cards.length;
        }
    
        console.log("index of source: ",s_bIndex,  s_cIndex);
        console.log("index of target: ",t_bIndex,  t_cIndex);
    
        const tempBoards = [...boardData];
        const tempSourceCard = tempBoards[s_bIndex].cards[s_cIndex];
    
        tempBoards[s_bIndex].cards.splice(s_cIndex, 1);
    
        tempBoards[t_bIndex].cards.splice(t_cIndex, 0, tempSourceCard);
        console.log("dragged board final: ", tempBoards);
        setBoardData(tempBoards);
    
      }
    
      useEffect(() => {
        console.log("Target updated:", target);
      }, [target]);

      useEffect(()=>{
        console.log("board data in main body: ", boardData);
      }, [])
    

  return (
    <div>
      <div className="outer">
        <div className="boards">
          {
            boardData.map((board)=>{
              return (
                <Board 
                    key={board.id} 
                    board={board} 
                    setBoardData={setBoardData} 
                    boardData={boardData}
                    handleDragEnd={handleDragEnd}
                    handleDragEnter={handleDragEnter}
                />
              )
            })
          }
          <AddBoard setBoardData={setBoardData} boardData={boardData}/>
        </div>
      </div>
    </div>
  )
}

export default MainBody
