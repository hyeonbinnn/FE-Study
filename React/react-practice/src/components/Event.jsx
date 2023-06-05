import React from 'react';
import { useState } from 'react';

export default function Event() {
  const [message, setMessage] = useState('여기를 주목하세요');

  const handleOnMouseEnter = () => {
    setMessage('안녕하세요!');
  };

  const handleOnMouseLeave = () => {
    setMessage('안녕히가세요!');
  };

  ////////////
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    if (id === '') {
      alert('아이디를 입력하지 않았습니다');
    }
    if (pw === '') {
      alert('패스워드를 입력하지 않았습니다');
    }
    alert(`id : ${id}, pw: ${pw}`);
  };

  const handleLoginInput = (e) => {
    console.log('id', e.target.value);
    setId(e.target.value);
  };
  const handlePasswordInput = (e) => {
    console.log('pw', e.target.value);
    setPw(e.target.value);
  };

  return (
    <div>
      <p onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
        마우스 올리기
      </p>
      <div style={{ paddingBottom: '20px' }}>{message}</div>
      <form onSubmit={handleLoginSubmit}>
        <label>
          아이디 : <input type="text" onChange={handleLoginInput}></input>
        </label>
        <br />
        <label>
          비밀번호 : <input type="password" onChange={handlePasswordInput}></input>
        </label>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
