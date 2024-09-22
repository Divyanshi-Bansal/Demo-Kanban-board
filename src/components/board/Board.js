import React from 'react';
import './Board.css';
import Card from '../card/Card';
import {MoreHorizontal} from 'react-feather';
import AddCard from '../card/AddCard';

const Board = () => {
  return (
    <div className='board'>
      <div className='board_top'>
        <p className='board_top_title'>board title</p>
        <span className='board_top_count'>2</span> 
        <MoreHorizontal/>
      </div>
      <div className='board_cards custom-scroll'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <AddCard/>
      </div>
    </div>
  )
}

export default Board
