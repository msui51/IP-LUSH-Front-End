import React from 'react';
import './orderList.scss';

function OrderList({}) {
  return (
    <div className='orderList'>
      <div className='orderList__header'>
        <h1>CURRENT ORDER (12)</h1>
        <ul className='orderList__list'>
          <li className='orderList__listItem'>
                <div className='orderList__boxLeft'>
                    <img
                        className="orderList__item-image"
                        src={require('../../Assets/Images/Frame 14.png')}
                        alt="soap bar"
                    />
                
                </div>
                <div className='orderList__boxCenter'>
                    <p className="orderList__title">Salt Water Soother</p>
                    <p className="orderList__productDetails">180g</p>
                    <div className="orderList__productDetails">
                      <div className="orderList__productQuanityWrapper">
                      {/* PUT BUTTON COUNTERS IN HERE LOGIC TO BE ADDED */}
                        - 12 +
                      </div>
                      
                    </div>          
                </div>
                <div className='orderList__boxRight'>
                    <p className="orderList__price-weight">$8.00</p>
                </div>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default OrderList