import React from 'react';
import Example from './components/Example';
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}

div {
  padding: 30px;
}

span {
  color: pink;
  font-size: 18px;
  font-weight: bold;
}

button {
  width: 60px;
  border: none;
  margin-top: 20px;
  cursor: pointer;
  padding: 5px;
  background-color: pink;
  font-weight: bold;
}
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        <h1>안녕 클레오파트라</h1>
        <span>세상에서 제일가는 포테이토칩</span>
        <br />
        <button>클릭</button>
        <Example />
      </div>
    </>
  );
};

export default App;
