import React, { useState, useEffect } from 'react';
import './orderList.scss';

function OrderList({ lushOrderList, updateLushOrderList }) {
  const [count, setCount] = useState(0);

  const handleAddChange = () => {
    setCount(count + 1);
  };

  const handleMinusChange = () => {
    if (count === 0) {
      return 0;
    }
    setCount(count - 1);
  };

  // Create a new array of objects to group items by name and count the quantity
  const groupedOrderList = lushOrderList.reduce((acc, item) => {
    const existingItem = acc.find((groupedItem) => groupedItem.name === item.name);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({
        name: item.name,
        product: item.product, 
        code: item.code,
        weight: item.weight,
        price: item.price,
        quantity: 1,
      });
    }

    return acc;
  }, []);

  // Log the new array to the console
  useEffect(() => {
    console.log(groupedOrderList);
  }, [groupedOrderList]);

  return (
    <div className='orderList'>
      <div className='orderList__header'>
        <h1>CURRENT ORDER ({count})</h1>
        <div className='orderList__wrapper'>
          <div className='orderList__wrapper-top'>
            <ul className='orderList__list'>
              {groupedOrderList.map((item) => (
                <li className='orderList__listItem' key={item.name}>
                  <div className='orderList__boxLeft'>
                    {/* Replace this with the actual image source */}
                    <img
                      className="orderList__item-image"
                      src={require(`../../Assets/Images/Frame 14.png`)}
                      alt={item.name}
                    />
                  </div>
                  <div className='orderList__boxCenter'>
                    <p className="orderList__title">{item.name}</p>
                    <p className="orderList__productDetails">{item.weight}</p>
                    <div className="orderList__productDetails">
                      <div className="orderList__productQuantityWrapper">
                        <button className='orderList__button' type='submit' onClick={handleMinusChange}>
                          {/* Your minus button SVG */}
                        </button>
                        <p className='orderList__productQuantity'>{item.quantity}</p>
                        <button className='orderList__button' type='submit' onClick={handleAddChange}>
                          {/* Your add button SVG */}
                        </button>
                      </div> 
                    </div>          
                  </div>
                  <div className='orderList__boxRight'>
                    <p className="orderList__price-weight">{item.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className='orderList__wrapper-bottom'>
            <div className='orderList__wrapper-bottom-price'>
              <p className='orderList__subtitle'>Subtotal :</p>
              <p className='orderList__price'>$0.00</p>
            </div>
            <div className='orderList__wrapper-bottom-price'>
              <p className='orderList__subtitle'>Discount Sales :</p>
              <p className='orderList__price'>$0.00</p>
            </div>
            <div className='orderList__wrapper-bottom-price'>
              <p className='orderList__subtitle'>Tax :</p>
              <p className='orderList__price'>$0.00</p>
            </div>
            <div className='orderList__wrapper-bottom-price'>
              <p className='orderList__subtitle orderList__subtitle-bold'>TOTAL :</p>
              <p className='orderList__price'>$0.00</p>
            </div>
            <button className='orderList__button-pay' type='submit'>PAY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderList;
