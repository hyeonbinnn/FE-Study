// [ Ajax 요청 처리 ]

// XMLHttpRequest 객체 생성
const xhr = new XMLHttpRequest();
// 비동기 방식으로 Request 오픈
xhr.open('GET', '/users');
// Request 전송
xhr.send();

// # Content-type
// * 구조화된 데이터를 전송할 때 사용
// json으로 전송하는 경우
xhr.open('POST', '/users');
// 클라이언트가 서버로 전송할 데이터의 MIME-type 지정: json
xhr.setRequestHeader('Content-type', 'application/json');

const data = { id: 5, title: 'apple pie', author: 'Park', price: 10000 };
xhr.send(JSON.stringify(data));

// * HTML 폼 데이터와 유사한 형태로 전송할 때 주로 사용
// x-www-form-urlencoded으로 전송하는 경우
xhr.send('POST', '/users');
// 클라이언트가 서버로 전송할 데이터의  MIME-type 지정: x-www-form-urlencoded
// application/x-www-form-urlencoded는 key=value&key=value...의 형태로 전송
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

const data2 = { title: 'apple pie', author: 'Park', price: 10000 };
xhr.send(
  Object.jeys(data)
    .map((key) => `${key}=${data[key]}`)
    .join('&')
);

// # Accept
// 서버가 센드백할 데이터의 MIME-type 지정: json
xhr.setRequestHeader('Accept', 'application/json');
