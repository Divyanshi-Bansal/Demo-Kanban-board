import React, { useState } from 'react'
import { Plus, X } from 'react-feather';

import './AddCard.css';

const AddCard = (props) => {

    const [showAdd, setShowAdd] = useState(true);
  return (
    <>
    {
        showAdd ? 
            <div className='add_card'>
                <p className='add_card_heading'>Add Card</p>
                <form className='card_details'
                    onSubmit={(event) =>{
                        event.preventDefault();
                        props.submitFunc && props.submitFunc()
                    }}
                >
                    <input type='text' placeholder='add card item' defaultValue="add card"/>
                    <div className='add_card_footer'>
                        <button type='submit'>Add</button>
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
