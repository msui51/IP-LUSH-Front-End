import React from 'react';
import './orderList.scss';

function OrderList() {
  return (
    <div className='OrderList'>
      <div className='OrderList__header'>
        <h1>CURRENT ORDER XX</h1>
        <ul className='OrderList__list'>
          <li className='OrderList__listItem'>
            <div className='OrderList__listItemimage'>
              IMAGE
            </div>
            <div className='OrderList__listItemInfoQuant'>
              infoQuant
            </div>
            <div className='OrderList__listItemUnitPrice'>
              UnitPrice
            </div>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default OrderList