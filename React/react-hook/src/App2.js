import React from 'react';
import { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [checkRender, setCheckRender] = useState(false);
  const countUp = () => {
    setCount(count + 1);
  };

  // count가 변했을 때 동작할 행동을 useEffect를 이용해 구현
  useEffect(() => {
    if (checkRender) {
      if (count % 2) {
        alert('홀수입니다');
      } else {
        alert('짝수입니다');
      }
    } else {
      setCheckRender(true);
    }
  }, [count]);

  return (
    <>
      <div>{count}</div>
      <button onClick={countUp}>Up!</button>
    </>
  );
};

const App2 = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App2;
