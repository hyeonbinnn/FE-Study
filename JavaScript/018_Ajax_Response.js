// [ Ajax 응답 처리 ]

// XMLHttpRequest 객체의 생성
var xhr = new XMLHttpRequest();
// 비동기 방식으로 Request를 오픈한다
xhr.open('GET', 'data/test.json');
// Request를 전송한다
xhr.send();

// XMLHttpRequest.readyState 프로퍼티가 변경될 때마다 콜백함수 즉, 이벤트 핸들러가 호출됨
xhr.onreadystatechange = function (e) {
  // 이 함수는 Response가 클라이언트에 도달하면 호출됨

  // readyStates는 XMLHttpRequest의 상태(state)를 반환
  // readyState: 4 => DONE(서버 응답 완료)
  if (xhr.readyState !== XMLHttpRequest.DONE) return;

  // status는 response 상태 코드를 반환 : 200 => 정상 응답
  if (xhr.status === 200) {
    console.log(xhr.responseText);
  } else {
    console.log('Error!');
  }
};
