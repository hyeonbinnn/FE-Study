import React from 'react';
import { useState, useRef, useMemo } from 'react';

const App6 = () => {
  const inputName = useRef(null);
  const inputId = useRef(null);
  const [userInfo, setUserInfo] = useState([]);
  const [name, setName] = useState('');
  const [id, setId] = useState('');

  const getNum = (li) => {
    console.log('렌더링!');
    return li.length;
  };

  const n = useMemo(() => getNum(userInfo), [userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInfo = [...userInfo, { name: name, id: id }];
    inputName.current.value = '';
    inputId.current.value = '';
    inputName.current.focus();
    setUserInfo(newInfo);
    console.log('렌더링 - 3');
  };
  const handleInputName = (e) => {
    console.log(e);
    setName(e.target.value);
    console.log('렌더링 - 1');
  };

  const handleInputId = (e) => {
    console.log(e);
    setId(e.target.value);
    console.log('렌더링 - 2');
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="이름을 입력하세요"
          onChange={handleInputName}
          ref={inputName}
        />
        <input
          type="text"
          placeholder="아이디를 입력하세요"
          onChange={handleInputId}
          ref={inputId}
        />
        <button type="submit" onClick={handleSubmit}>
          회원 명부 작성
        </button>
      </form>
      <ul>
        {userInfo.map((value, index) => (
          <li key={index}>
            <h3>{value.name}</h3>
            <strong>@{value.id}</strong>
          </li>
        ))}
      </ul>
      <span>{n}</span>
    </>
  );
};

export default App6;
