import React from 'react'
import './newAccountForm.scss';
import { useState } from 'react';


function NewAccountForm() {
    const [isClicked, setIsClicked] = useState(false);
    const toggleIsClicked=()=>{
        setIsClicked(true);
    }
  return (
    <div className='newAccountForm'>
        {isClicked ? null 
        : <p className='newAccountForm__text' onClick={toggleIsClicked}>Create a new account</p>
        }
        {isClicked ?
            <form className='newAccountForm__form'>
                <label className='newAccountForm__label'>Name</label>
                <input className='newAccountForm__input'></input>
                <label className='newAccountForm__label'>Email</label>
                <input className='newAccountForm__input'></input>
                <label className='newAccountForm__label'>Date of birth</label>
                <input className='newAccountForm__input'></input>
            </form>
        : null}
    </div>
  )
}

export default NewAccountForm