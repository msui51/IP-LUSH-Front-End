import React, { useState, useEffect } from 'react';
import './orderList.scss';

function OrderList({ lushOrderList, updateLushOrderList, togglePaymentProcess, isPaymentProcess }) {
  console.log('from OrderList state function:', lushOrderList);
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
        image: item.image,
        quantity: 1,
      });
    }

    return acc;
  }, []);

 
  //adding the total quantity from individual orders
  let result = groupedOrderList.reduce((sum, item)=> sum + item.quantity, 0)
  console.log(result);


   // Log the new array to the console
  useEffect(() => {
    console.log(groupedOrderList);
  }, [groupedOrderList]);


  return (
    <div className='orderList'>
      <div className='orderList__header'>
        <h1>CURRENT ORDER ({result})</h1>
        <div className={isPaymentProcess ? 'orderList__wrapper orderList__wrapper--no-button' : 'orderList__wrapper'}>
          <div className='orderList__wrapper-top'>
            <ul className='orderList__list'>
              {groupedOrderList.map((item) => (
                <li className='orderList__listItem' key={item.name}>
                  <div className='orderList__boxLeft'>
                    <img
                      className="orderList__item-image"
                      src={require(`../../Assets/Images/${item.image}`)}
                      alt={item.name}
                    />
                  </div>
                  <div className='orderList__boxCenter'>
                    <p className="orderList__title">{item.name}</p>
                    <p className="orderList__productDetails">{item.weight}</p>
                    <div className="orderList__productDetails">
                      <div className="orderList__productQuantityWrapper">
                        <button className='orderList__button' type='submit' onClick={handleMinusChange}>
                          <svg className='orderList__icon--minus' width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path id="Line 3" d="M1.75 1.75L13.75 1.75" stroke="black" stroke-width="2.25" stroke-linecap="round"/>
                          </svg>
                        </button>
                        <p className='orderList__productQuantity'>{item.quantity}</p>
                        <button className='orderList__button' type='submit' onClick={handleAddChange}>
                          <svg className='orderList__icon--add' width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path id="Icon" d="M10.7501 4.35004L10.7501 15.15M17.0501 9.75004L4.45007 9.75004" stroke="black" stroke-width="2.25" stroke-linecap="round"/>
                          </svg>
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
            {isPaymentProcess ? null :
            <button className='orderList__button-pay' type='submit' onClick={togglePaymentProcess}>PAY NOW</button>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderList;
