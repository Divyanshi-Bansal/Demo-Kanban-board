import React, { useEffect, useRef } from 'react';
import './Dropdown.css';

const Dropdown = (props) => {

    const dropdownRef = useRef();

    const handleClick = (event) =>{
        console.log(dropdownRef.current);
        console.log(event.target);
        if(dropdownRef && dropdownRef.current && !dropdownRef.current.contains(event.target)){
            console.log("enter here")
            if(props.onCloseFunc ) {
                console.log("on close func")
                props.onCloseFunc();
            }
        }
    }

    useEffect(()=>{
        document.addEventListener('click', handleClick);
        return ()=>{
            document.removeEventListener('click', handleClick);
        }
    },[]);

  return (
    <div className='dropdown' ref={dropdownRef} onClick={(e)=>e.stopPropagation()}>
      {props.children}
    </div>
  )
}

export default Dropdown
