import React from 'react'
import BoardData from '../data/BoardData'


export const addBoard = (title) =>{
    const board = BoardData.find((board) => board.title === title);
    if(board) return;

    const boardNew = {
        id:new Date() + Math.random()*2,
        title:title,
        cards:[]
    }
     return boardNew;
}
