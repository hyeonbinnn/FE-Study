import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
${normalize}

button {
  width: 70px;
  height: 25px;
  background: #FFD69D;
  border: 1px solid gray;
  border-radius: 5px;
  margin: 5px;
  font-size: 13px;
}
`;

const CardDiv = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  background-color: #fcffde;
  margin: 30px auto;
  width: ${(props) => (props.className === 'yourCard' ? '300px' : '500px')};
  text-align: center;
`;

const Card = (props) => {
  return (
    <>
      <CardDiv className={props.className}>
        <h3>{props.value}</h3>
        <hr />
        <div>{props.children}</div>
      </CardDiv>
    </>
  );
};

const YourCard = () => {
  return (
    <>
      <button>초기화</button>
      <button>저장하기</button>
    </>
  );
};

const MyCard = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut eveniet, laudantium,
        deleniti autem sequi molestias magni quia, aliquam et praesentium nostrum dolores culpa
        cupiditate unde doloremque labore beatae accusamus.
      </p>
      <div>
        <button>추가하기</button>
        <button>저장하기</button>
        <button>수정하기</button>
        <button>삭제하기</button>
      </div>
    </>
  );
};

const App2 = () => {
  return (
    <>
      <GlobalStyle />
      <Card className="yourCard" value="Your Card">
        <YourCard />
      </Card>
      <Card className="myCard" value="My Card">
        <MyCard />
      </Card>
    </>
  );
};

export default App2;
