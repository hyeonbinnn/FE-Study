import React from 'react';
import { useState } from 'react';

export default function Resume(props) {
  const [like, setLike] = useState(0);
  const [show, setShow] = useState('');

  function clickLike() {
    // +1 은 기존의 like 값과 1을 더해 새로운 값을 반환하는것이고
    // ++ 변수의 값 자체를 직접적으로 변경하려는 시도!!
    setLike(like + 1);
  }

  function clickShow() {
    if (show === '') {
      setShow('Go! Go!');
    } else {
      setShow('');
    }
  }

  const myColor = props.color;
  const styleColor = { color: myColor };

  return (
    <div style={{ border: 'solid 1px', width: '500px', padding: '20px' }}>
      <h1>{props.name} 자기소개서</h1>
      <h1>{props.hello}</h1>
      <h2>취미 : {props.hobby}</h2>
      <h2>좋아하는 음식 : {props.food}</h2>
      <h2>
        좋아하는 색 : <span style={styleColor}>{myColor}</span>
      </h2>
      <button onClick={clickLike}>
        like <span>{like}</span>
      </button>
      <div style={{ paddingTop: '20px' }}>
        <button onClick={clickShow}>show</button>
        <span style={{ paddingLeft: '20px' }}>{show}</span>
      </div>
    </div>
  );
}
