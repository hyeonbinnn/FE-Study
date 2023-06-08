import React from 'react';
import { useState } from 'react';
import ThreeMenu from './ThreeMenu';

const MenuBar = () => {
  const [itemName, setItemName] = useState('about');
  const checkItem = (e) => {
    setItemName(e.target.id);
  };

  return (
    <>
      <nav style={{ border: 'solid 2px', width: '700px' }}>
        <ul>
          <li
            id="about"
            style={itemName === 'about' ? { color: 'hotpink' } : { color: 'black' }}
            onClick={checkItem}
          >
            About
          </li>
          <li
            id="item"
            onClick={checkItem}
            style={itemName === 'item' ? { color: 'blue' } : { color: 'black' }}
          >
            Item
          </li>
          <li
            id="contact"
            onClick={checkItem}
            style={itemName === 'contact' ? { color: 'orange' } : { color: 'black' }}
          >
            Contact
          </li>
        </ul>
        <ThreeMenu itemName={itemName} />
      </nav>
    </>
  );
};

export default MenuBar;
