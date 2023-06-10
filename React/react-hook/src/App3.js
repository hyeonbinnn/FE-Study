import React from 'react';
import { useState, useEffect } from 'react';

const Time = (props) => {
  const [today, setToday] = useState(new Date());
  const [hour, setHour] = useState(today.getHours());
  const [min, setMin] = useState(today.getMinutes());
  const [sec, setSec] = useState(today.getSeconds());
  console.log('렌더링이 됩니다');

  useEffect(() => {
    let time = setInterval(() => {
      const t = new Date();
      setToday(t);
      setHour(t.getHours());
      setMin(t.getMinutes());
      setSec(t.getSeconds());
    }, 1000);
    return () => {
      //컴포넌트가 사라지기 전에 setinterval을 clearinterval해준다.
      clearInterval(time);
    };
  }, [today]);
  return (
    <>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </>
  );
};

const App3 = () => {
  return (
    <>
      <Time />
    </>
  );
};

export default App3;
