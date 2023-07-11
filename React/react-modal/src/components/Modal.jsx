import React from 'react';

const Button = (props) => {
  const { text, onClick } = props;
  return <button onClick={onClick}>{text}</button>;
};

const Modal = (props) => {
  const { title, content, onClose } = props;
  return (
    <>
      <h2>{title}</h2>
      <p>{content}</p>
      <Button text="Close Modal" onClick={onClose} />
    </>
  );
};

export default Modal;
