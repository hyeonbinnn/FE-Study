// 일반 함수
// function sum(a, b) {
//   console.log(a + b);
// }

// * 함수의 표현식
const sum = function (a, b) {
  console.log(a + b);
};
sum(10, 20); // 30

// # 화살표 함수
// 명령어가 한 줄일 때, 중괄호 생략해도 자동으로 리턴이 들어감
const num = (a, b) => a + b;
console.log(num(10, 20)); //30

// 중괄호를 열었으면 값을 리턴해야 하는 경우 return을 넣어줘야 함
const num2 = (a, b) => {
  return a + b;
};
console.log(num2(10, 20)); //30

// * 일반 함수 화살표 함수로 바꾸기
// 일반 함수
// function hello() {
//   console.log('Hello!');
//   console.log('World!');
// }

// # 화살표 함수
const hello = () => {
  console.log('Hello!');
  console.log('World!');
};

hello();

// 일반 함수
// function sum2(a, b) {
//   return a + b;
// }
// console.log(sum2(10, 30));

// # 화살표 함수
const sum2 = (a, b) => {
  return a + b;
};
console.log(sum2(10, 30));

// 일반 함수
// function greeting(user) {
//   console.log(`Hello, ${user}!`);
// }

// greeting('철수');

// # 화살표 함수
const greeting = (user) => {
  console.log(`Hello, ${user}!`);
};

greeting('철수');
