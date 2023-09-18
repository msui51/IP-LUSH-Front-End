import React from 'react';
import './item.scss';

function Item({name, product, price, weight, image}) {
  return (
    <div className='item'>
      <img className='item__image' src={image} alt='soap bar'></img>
      <p className='item__title'>{name}</p>
      <div className='item__bottom-wrapper'>  
        <p className='item__price-weight'>{price}/{weight}</p>
        <svg className='item__add-icon' width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="Icon" d="M10.7501 4.35004L10.7501 15.15M17.0501 9.75004L4.45007 9.75004" stroke="black" stroke-width="2.25" stroke-linecap="round"/>
        </svg>
      </div>
    </div>
  )
}

export default Item