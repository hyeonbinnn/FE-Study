import React from 'react';
import { Address, Shop } from './model/shop';

interface OwnProps {
  info: Shop;
  changeAddress(address: Address): void;
}

const Store: React.FC<OwnProps> = ({ info, changeAddress }) => {
  return (
    <div>
      {info.name}
      <p></p>
    </div>
  );
};

export default Store;
