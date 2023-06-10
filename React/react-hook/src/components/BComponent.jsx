import React from 'react';
import useAB from '../hook/useAB';

const BComponent = () => {
  const [value, onChange] = useAB('');
  return (
    <>
      <input type="text" onChange={onChange} />
      <div>{value}가 강해졌다 돌격해!</div>
    </>
  );
};

export default BComponent;
