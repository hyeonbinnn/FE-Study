import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './Store';
import { Address, Shop } from './model/shop';
import BestMenu from './BestMenu';

let data: Shop = {
  name: 'shop-shop',
  category: 'goods',
  address: {
    city: 'seoul',
    detail: 'mapo',
    zipCode: 10192109212,
  },
  menu: [
    { name: 'lip', price: 5000, category: 'cosmetics' },
    { name: 'character cup', price: 10000, category: 'life' },
    { name: 'phone case', price: 20000, category: 'life' },
  ],
};

const App: React.FC = () => {
  const [myShop, setMyShop] = useState<Shop>(data);

  const changeAddress = (address: Address) => {
    setMyShop({ ...myShop, address: address });
  };

  const showBestMenuName = (name: string) => {
    return name;
  };
  return (
    <div className="App">
      <Store info={myShop} changeAddress={changeAddress} />
      <BestMenu name="lip" category="cosmetics" showBestMenuName={showBestMenuName} />
    </div>
  );
};

export default App;
