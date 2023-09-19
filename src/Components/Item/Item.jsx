import React, { useState } from 'react';
import './item.scss';
import ShrunkItem from './ShrunkItem';
import ExpandedItem from './ExpandedItem';

function Item({ name, product, price, weight, code, quantity }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleView = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div onClick={toggleView}>
      {isExpanded ? (
        <ExpandedItem
          name={name}
          product={product}
          price={price}
          weight={weight}
          code={code}
          quantity={quantity}
        />
      ) : (
        <ShrunkItem
          name={name}
          product={product}
          price={price}
          weight={weight}
        />
      )}
    </div>
  );
}

export default Item;
