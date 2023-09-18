import React from 'react';
import './itemList.scss';
import Item from '../Item/Item';
import data from '../../Assets/Data/test.json';
import { ScrollArea } from '@mantine/core';

function ItemList() {
  // Log data.image here

  return (
    <div className='itemList'>
      <ScrollArea>
        <ul className='itemList__list'>
          {data.map((data) => (
            <li className='itemList__item' key={data.id}>
              <Item
                name={data.name}
                product={data.product}
                price={data.price}
                weight={data.weight}
              />
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
}

export default ItemList;
