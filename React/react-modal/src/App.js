import React, { useState } from 'react';
import Modal2 from './components/Modal2';
import styled from 'styled-components';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <h1>Welcome to my app!!</h1>
      <button onClick={handleOpenModal}>Open Modal</button>
      {isModalOpen && (
        <Modal2 title="Hello 😉" content="Welcome Modal World" onClose={handleCloseModal} />
      )}
    </Container>
  );
};

export default App;

const Container = styled.div`
  width: 500px;
  margin: 30px auto;
  text-align: center;
`;
