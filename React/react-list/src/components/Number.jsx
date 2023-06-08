import React from 'react';
import One from './One';
import Two from './Two';

export default function Number(props) {
  const name = props.name;
  if (name) {
    return <One name={name} />;
  } else {
    return <Two />;
  }
}
