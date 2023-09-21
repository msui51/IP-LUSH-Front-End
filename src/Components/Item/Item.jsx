import React, { useState } from 'react';
import './item.scss';
import ShrunkItem from './ShrunkItem';
import ExpandedItem from './ExpandedItem';

function Item({ lushOrderList, updateLushOrderList, name, product, price, weight, code, quantity, image }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleView = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div onClick={toggleView}>
      {isExpanded ? (
        <ExpandedItem
          lushOrderList={lushOrderList}
          updateLushOrderList={updateLushOrderList}
          name={name}
          product={product}
          price={price}
          weight={weight}
          code={code}
          quantity={quantity}
          image={image}
        />
      ) : (
        <ShrunkItem
          lushOrderList={lushOrderList}
          updateLushOrderList={updateLushOrderList}
          name={name}
          product={product}
          price={price}
          weight={weight}
          image={image}
        />
      )}
    </div>
  );
}

export default Item;
