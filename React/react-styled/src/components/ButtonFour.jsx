import styled from 'styled-components';

// props에 따른 조건부 스타일
export const ButtonFour = styled.button`
  background-color: ${(props) => (props.name === 'Four' ? 'powderblue' : 'red')};
  border-radius: 50px 70px;
  border: 5px dotted yellow;
`;
