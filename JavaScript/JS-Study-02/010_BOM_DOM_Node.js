// 자바스크립트의 절대적인 핵심 요소
// 자바스크립트는 인터프리터 언어이기 때문에 컴파일 언어인 C나 Java에 비해 속도가 느림
// 그렇다고 파이썬처럼 연산에 특화된 강력한 함수들을 가지고 있지도 않음
// 그런데 왜? 프론트엔드 개발자는 자바스크립트를 학습할까?
// 서버는 Java, JavaScript, 루비, 파이썬도 가능함
// 웹브라우저, 웹페이지를 컨트롤할 수 있는 건 자스뿐!

// * BOM - Browser Object Modal
// 웹 브라우저의 다양한 기능을 객체처럼 다루는 모델

// # 1. window 객체
// 전역 컨텍스트이자 브라우저 창을 나타내는 객체
// 전역 변수나 전역 함수의 경우 window의 프로퍼티처럼 작동
// innerWidth, innerHeight - 사용자가 보는 페이지의 너비와 높이
// screenX, screenY - 모니터 화면 끝에서 웹 브라우저의 거리
// scrollBy(), scrollTo() - 스크롤 위치를 조절하는 메서드

// # 2. screen 객체
// 사용자 환경의 디스플레이 정보를 가지는 객체
// availHeight, availWidth - 브라우저가 사용이 가능한 높이와 너비
// width, height - 모니터 너비와 높이
// orientation - 기울기에 대한 정보를 나타내는 객체

// # 3. location 객체
// 사용자가 보고 있는 페이지의 URL을 다루는 객체
// href - 현재 주소 / 다른 주소 입력 시 해당 페이지로 이동
// reload - 새로고침
// replace - 인수로 전달한 페이지로 교체함

// # 4. navigator 객체
// 웹브라우저 및 브라우저 환경 정보를 가지는 객체
// userAgent - 사용자가 어떤 기기에서 웹 페이지에 접속했는지 알 수 있음

// * DOM / Node
// 자바스크립트 Node 객체의 계층화된 트리

// # 1. document 노드
// 웹페이지마다 존재하는 객체
// 웹페이지 안의 모든 컨텐츠를 다루는 시작점
// title, url, doctype, documentElement, head, body, getElementById, createElement, querySelector
// readyState - loading(DOM 트리 구축 완료), interactive(이미지, CSS, JS 같은 하위 자원 로딩 중), complete(문서와 모든 하위 자원 로딩 완료)

// # 2. element 노드
// 웹 페이지 안의 각 html 태그 요소들을 의미
// querySelector, classList, dataset, id, innerHTML, parentNode, nextSibling, previousSibling
