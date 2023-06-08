import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { ButtonOne } from './components/ButtonOne';
import { ButtonTwo } from './components/ButtonTwo';
import { ButtonThree } from './components/ButtonThree';
import { ButtonFour } from './components/ButtonFour';

// 글로벌 스타일 적용
const GlobalStyle = createGlobalStyle`
button {
  width: 200px;
  height: 80px;
  border-radius: 10px;
  margin: 30px;
  font-size: 20px;
}
`;

const App3 = () => {
  return (
    <>
      <GlobalStyle />
      <ButtonOne>Global / Styled</ButtonOne>
      <ButtonTwo>Global / Styled</ButtonTwo>
      <ButtonThree>Global / 확장</ButtonThree>
      <ButtonFour name="Four">Global / props</ButtonFour>
    </>
  );
};

export default App3;
