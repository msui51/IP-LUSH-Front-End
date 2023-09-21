import React from 'react';
import './item.scss';
import soapImage from '../../Assets/Images/Frame 14.png';

const ShrunkItem = ({ lushOrderList, updateLushOrderList, name, product, price, weight, code, image }) => {
  const handleClick = () => {
    // Create a new order item
    const newOrderItem = {
      name,
      product,
      price,
      weight,
      code,
      image,
      quantity: 1, // Start with a quantity of 1
    };

    // Update the lushOrderList by adding the new item
    const updatedOrderList = [...lushOrderList, newOrderItem];
    updateLushOrderList(updatedOrderList);

    // Log the updated lushOrderList
    console.log('Updated Lush Order List:', updatedOrderList);
  };

  return (
    <div className="item">
      <img
        className="item__image"
        src={soapImage}
        alt="soap bar"
      ></img>
      <p className="item__title">{name}</p>
      <div className="item__bottom-wrapper">
        <p className="item__price-weight">{price}/{weight}</p>
        <svg
          onClick={handleClick}
          className="item__add-icon"
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
  );
}

export default ShrunkItem;
