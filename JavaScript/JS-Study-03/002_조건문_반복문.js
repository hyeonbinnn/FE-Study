// * 1. 조건문
// if문
let age = 20;

function money() {
  if (age >= 18) {
    console.log('20,000원 지불');
  } else {
    console.log('10,000원 지불');
  }
}

money();

// switch문
let name = '철수';
switch (name) {
  case '영희':
    console.log('영희입니다.');
    break;
  case '철수':
    console.log('철수입니다.');
    break;
  default:
    console.log('미희입니다.');
}

// 삼항연산자
let num = true;
let number = num ? '숫자입니다.' : '글자입니다.';
console.log(number);

// * 2. 반복문
// for문
let box = 0;
for (let i = 0; i < 6; i++) {
  box = box + i;
}
console.log(box);

// while문
// 조건이 참인 동안 반복적으로 코드 실행
// 초기화, 증감 부분 명시적 작성
while (box === 15) {
  box++;
}
console.log(box);

// do-while문
// 코드 블록 최소 한 번 실행, 조건이 참인 동안 계속 반복
// 조건을 확인하기 전에 코드 블록이 실행
let i = 0;
do {
  i++;
} while (i < 10);

// for in (객체 순회)
const lists = { a: '사람', b: '식물', c: '동물' };

for (let l in lists) {
  console.log(l, lists[l]);
}

// for of (배열 순회)
const lists2 = [1, 2, 3, 4, 5];

for (let l2 of lists2) {
  console.log(l2);
}
