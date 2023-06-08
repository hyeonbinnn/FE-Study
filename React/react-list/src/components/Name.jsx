import React from 'react';
import Noname from './Noname';

export default function Name({ name }) {
  if (name) {
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
  return <Noname />;
}
