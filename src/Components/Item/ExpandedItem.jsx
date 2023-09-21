import React from 'react';
import './item.scss';

const ExpandedItem = ({ lushOrderList, updateLushOrderList, name, product, price, weight, code, quantity, image }) => {
  return (
       <div className="expandedItem">
            <img
                className="item__image"
                src={require(`../../Assets/Images/${image}`)}
                alt="soap bar"
            />
        <div className='expandedItem__boxCenter'>
            <p className="expandedItem__title">{name}</p>
            <p className="expandedItem__productDetails">{product}</p>
            <p className="expandedItem__productDetails">UPC: {code}</p>
            <p className="expandedItem__productDetails">Quantity: {quantity}</p>
            <p className="expandedItem__productDetails">{weight}</p>
        </div>
        <div className='expandedItem__boxRight'>
            <p className="expandedItem__price-weight">{price}</p>
            <svg
            className="expandedItem__add-icon"
            width="22"
            height="19"
            viewBox="0 0 22 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    id="Icon"
                    d="M10.7501 4.35004L10.7501 15.15M17.0501 9.75004L4.45007 9.75004"
                    stroke="black"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    </div>
  )
}

export default ExpandedItem
