import React from 'react';
import styled from 'styled-components';

const ContentDiv = styled.div`
  margin: 40px;
  padding: 30px;
  border: solid 2px;
  background-color: aliceblue;
`;

const ContentH2 = styled.h2`
  color: ${(props) => (props.name === 'hello' ? 'hotpink' : 'black')};
  width: 200px;
  margin: 0 auto;
  text-align: center;
`;

const Content = styled(ContentH2)`
  border: 1px solid blue;
`;

const App2 = () => {
  return (
    <ContentDiv>
      <ContentH2 name="hello">Content</ContentH2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi corrupti quo
        blanditiis! Adipisci amet corporis ipsum odio minima aliquid quisquam! Dignissimos natus
        laborum qui veritatis quaerat eaque! Nemo, ullam.
      </p>
      <Content>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </Content>
    </ContentDiv>
  );
};

export default App2;
