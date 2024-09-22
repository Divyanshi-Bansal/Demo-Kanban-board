import React from 'react';
import './Chip.css';
import { X } from 'react-feather';

const Chip = (props) => {
  return (
    <div className='chip' style={{backgroundColor:props.color}}>
      {props.text}
      {props.close && <X onClick={()=>{
        props.closeFunc && props.closeFunc()
      }}/>}
    </div>
  )
}

export default Chip
