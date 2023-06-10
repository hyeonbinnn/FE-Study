import React from 'react';
import useAB from '../hook/useAB';

const AComponent = () => {
  const [value, onChange] = useAB('');
  return (
    <>
      <input type="text" onChange={onChange} />
      <div>{value}</div>
    </>
  );
};

export default AComponent;
