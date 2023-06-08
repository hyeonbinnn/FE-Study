import React from 'react';
import Example from './components/Example';
import normalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
${normalize}

div {
  padding: 30px;
}

span {
  color: hotpink;
  font-size: 18px;
  font-weight: bold;
}

button {
  width: 60px;
  border: none;
  margin-top: 20px;
  cursor: pointer;
  background-color: pink;
}

* {
  font-family: 'Times New Roman', Times, serif;
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
