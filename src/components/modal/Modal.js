import React from 'react';
import './Modal.css';
import { X } from 'react-feather';

const Modal = (props) => {
  return (
    <div className='modal'>
      <div className='modal_content'>
        <div className='modal_header'>
            <h3>{props.title}</h3>
            <X onClick={props.cancelFunc} style={{cursor:"pointer"}}/>
        </div>
        <div className='modal_body'>
          {props.children}
        </div>
        <div className='modal_footer'>
          <button className='primaryBtn' onSubmit={()=>props.submitFunc()}>
            {props.primaryBtnText}
          </button>
          <button className='secondaryBtn' onClick={()=>props.cancelFunc()}>
            {props.secondaryBtnText}
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default Modal
