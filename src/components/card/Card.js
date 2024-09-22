import React from 'react';
import './Card.css';
import { CheckSquare, Clock, MoreHorizontal } from 'react-feather';
import Chip from '../chip/Chip';

const Card = () => {
  return (
    <div className='card'>

      <div className='card_top'>
        <div className='card_top_labels'>
            <Chip
                text="Frontend" color="blue"
            />
            <Chip
                text="React" color="blue" close
            />
        </div>
        <MoreHorizontal className='card_top_more_icon'/>
      </div>

      <div className='card_title'>
        card title over here
      </div>
      <div className='card_footer'>
        <p>
            <Clock/>
            23 Sep
        </p>
        <p>
            <CheckSquare/>
            1/4
        </p>
      </div>

    </div>
  )
}

export default Card
