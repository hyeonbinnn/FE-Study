// 면접 대비 자바스크립트 기본 개념을 잊지말자는 복기 타임!

// 예약어란 프로그램에서 미리 사용할 수 있게 정의해놓은 용어
// 예약어 == 키워드
// 변수명에 예약어 사용 금지

var msg = 'hi';
console.log(msg);

var msg = 'h11';
console.log(msg);

msg = 'h111';
console.log(msg); // var은 재선언, 재할당 O

let msg2 = 'h12';
console.log(msg2);

// let msg2 = 'h12';

msg2 = 'h122';
console.log(msg2); // let은 재선언 X, 재할당 O

const msg3 = 'hi3';
console.log(msg3);

// const msg3 = 'hi3';
// msg3 = 'h133';
// console.log(msg3); // const는 재선언, 재할당 X

// WHY? 브랜든 아이크 선생님이 var 키워드를 도입한 것이 자신의 실수라고 함
// 이를 해결하기 위해 ES6에서 let과 const 키워드를 도입하면서 변수 선언에 더 명확한 방법을 제공
// 따라서 블록 스코프를 따르게 되면서 변수의 범위를 더 명확하게 정의

let a = 6;
let b = 'six';
let c = ['a', 'b', 5, 6];
let d = { a: '에이', b: '비', c: 5, d: 6 };
let e = true;
console.log(a, b, c, d, e);

// 변수명 만들 때 주의
// 1. 첫글자 숫자 X
// 2. 하이픈 X
// 3. 카멜케이스 O -> msgPhone
// 4. 변수 이름 상대가 코드를 보고 바로 이해하기 쉽게 만들기
// 5. 한글 변수명 가능하나 자제하자
