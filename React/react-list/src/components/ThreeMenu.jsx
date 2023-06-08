import React from 'react';
import About from './About';
import Item from './Item';
import Contact from './Contact';

const ThreeMenu = ({ itemName }) => {
  if (itemName === 'about') {
    return <About />;
  } else if (itemName === 'item') {
    return <Item />;
  } else if (itemName === 'contact') {
    return <Contact />;
  }
};

export default ThreeMenu;
