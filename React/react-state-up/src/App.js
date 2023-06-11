import React from 'react';
import { useState } from 'react';

// + 더하는 컴포넌트
const AddCalculator = (props) => {
  return (
    <div>
      <h2>더하기</h2>
      <input type="number" name="num1" value={props.num1} onChange={props.handleNum1} />
      <input type="number" name="num2" value={props.num2} onChange={props.handleNum2} />
      결과 : {props.num1 + props.num2}
    </div>
  );
};

// - 빼는 컴포넌트
const SubCalculator = (props) => {
  return (
    <div>
      <h2>빼기</h2>
      <input type="number" name="num1" value={props.num1} onChange={props.handleNum1} />
      <input type="number" name="num2" value={props.num2} onChange={props.handleNum2} />
      결과 : {props.num1 - props.num2}
    </div>
  );
};

const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const handleNum1 = (e) => {
    const newNum1 = parseInt(e.target.value);
    setNum1(newNum1);
  };

  const handleNum2 = (e) => {
    const newNum2 = parseInt(e.target.value);
    setNum2(newNum2);
  };

  return (
    <>
      <h1>계산기</h1>
      <AddCalculator num1={num1} num2={num2} handleNum1={handleNum1} handleNum2={handleNum2} />
      <SubCalculator num1={num1} num2={num2} handleNum1={handleNum1} handleNum2={handleNum2} />
    </>
  );
};

export default App;
