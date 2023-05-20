// * DOM - Document Object Model
// HTML, XML 같은 문서의 요소들을 계층적으로 표현해서 생성, 수정, 삭제 등 조작이 가능하게 해주는 하나의 인터페이스

// * id값을 통해서 요소를 선택하는 방법
// const title = document.getElementsById('title-id');

// * class 이름을 통해서 요소를 선택하는 방법
// const title = document.getElementsByClassName('title-class');

// * tag 이름을 통해서 요소를 선택하는 방법
// const title = document.getElementsByTagName('h2');

// * querySelector(), querySelectorAll()
// const title = document.querySelector('# . h2');
// const title = document.querySelectorAll('. h2');

// * HTML 요소의 속성을 변경하는 방법
// HTML 모든 요소가 HTMLElement를 상속받고 있음
// const title = document.querySelector('h1');

// title.innerText = '안녕하세요!';
// title.style.color = 'blue';

// * 새로운 요소를 생성해서 HTML문서에 추가
const title = document.createElement('h1'); // 요소를 만드는 메서드
const body = document.querySelector('body');

title.innerText = '새로운 친구입니다!';
title.style.color = 'red';

body.appendChild(title); // 선택한 요소 안에 자식요소 추가
