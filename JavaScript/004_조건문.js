// * if
const a = 10;
const b = 20;
const c = 20;

// 조건이 참이니까 콘솔이 잘 출력
// 조건이 거짓이면 블록 내부에 진입 X
// 실행 부가 한줄로 끝날때는 중괄호 생략 가능
if (a < b) {
  console.log('a가 더 작아요!');
}

// * else
// 조건이 거짓일 때 동작 지정
if (a > b) {
  console.log('a가 더 작아요!');
} else {
  console.log('거짓!');
}

// 하나의 조건문을 작성할 때 if, else는 한 번만 사용
// if로 시작, else로 끝나야 함 (else 없어도 됨)

// * else if
if (a > b) {
  console.log('a가 더 큽니다!');
} else if (b === c) {
  console.log('b랑 c가 같습니다!'); // 출력
} else {
  console.log('여기는 언제 출력될까요?');
}

if (a > b) {
  console.log('a가 더 큽니다!');
} else if (b !== c) {
  console.log('b랑 c가 같습니다!');
} else {
  console.log('여기는 언제 출력될까요?'); // 출력
}

if (a > b) {
  console.log('a가 더 큽니다!');
} else if (b !== c) {
  console.log('b랑 c가 같습니다!');
} else if (b === c) {
  console.log('b랑 c가 같습니다!'); // 출력
} else {
  console.log('여기는 언제 출력될까요?');
}

// * switch
// 동일한 조건이 주어지고, 그 조건의 값에 따라 다른 명령을 실행할 수 있게 분기하는 방식
const number = 10;

switch (number) {
  case 10:
    console.log(number);
    break;
  case 2:
    console.log(number);
    break;
  default:
    console.log('아무것도 해당되지 않아요!');
    break;
}

// * if문 / switch문 차이
// 모듈러 연산을 사용해 홀짝을 구분하는 코드를 작성해보자!

const num = 10;

//  if문
if (num % 2 === 0) {
  console.log('짝수!');
} else {
  console.log('홀수!');
}

// switch문
switch (num % 2) {
  case 0:
    console.log('짝수!');
    break;
  case 1:
    console.log('홀수!');
    break;
}
