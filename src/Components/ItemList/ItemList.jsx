import React from 'react';
import './itemList.scss';
import Item from '../Item/Item';
import data from '../../Assets/Data/test.json';

function ItemList() {
  return (
    <div className='itemList'>
      <ul className='itemList__list'>
        {data.map((data)=>(
          <li className='itemList__item'>
            <Item 
              name={data.name}
              product={data.product}
              price={data.price}
              weight={data.weight}
              image={data.image}
              />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ItemList