import React from 'react';

import {
  CartItemContainer,
  ImageContainer,
  ItemDetailsContainer,
  ItemName
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <ImageContainer src={imageUrl} alt='item' />
      <ItemDetailsContainer>
        <ItemName>{name}</ItemName>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default React.memo(CartItem);
