import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { countState } from '../state/atoms/atoms';

const Counter = () => {
  const [count, setCount] = useRecoilState(countState);

  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  return (
    <Container>
      <h1>Count : {count} </h1>
      <Btn onClick={plus}>+</Btn>
      <Btn onClick={minus}>–</Btn>
    </Container>
  );
};

export default Counter;

const Container = styled.div`
  width: 300px;
  margin: 30px auto;
  padding: 5px 0px 30px;
  background-color: #e5e5e5;
  text-align: center;
`;

const Btn = styled.button`
  width: 40px;
  height: 40px;
  margin: 0px 10px;
  background-color: black;
  color: white;
  font-size: 30px;
`;
