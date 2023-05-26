// * 함수 작성 예시
function bab(main) {
  console.log(`${main}볶음밥`);
}

bab('새우'); // 새우볶음밥
bab('제육'); // 제육볶음밥

// * 함수 작성 예시
function sum(a, b) {
  console.log(a + b);
}

sum(2, 5); // 7

// * 지역변수
function a() {
  const b = 10; // 지역변수
  console.log(b);
}

a(); // 10
// console.log(b); // error

// * 전역변수
const bb = 10; // 전역변수
function aa() {
  console.log(bb);
}

aa(); // 10
console.log(bb); // 10

// * 중첩
const bbb = 10; // 전역변수
function aaa() {
  const bbb = 20; // 지역변수
  console.log(bbb);
}

aaa(); // 20
console.log(bbb); // 10

// * 함수와 인자, 매개변수 기본값값
// # 인자 = 함수를 선언할 때의 괄호 안의 값 = 매개변수 = Parameter
// # 인수 = 함수를 호출할 때의 괄호 안의 값 = 전달인자 = Argument
function sum(a, b) {
  console.log(a + b);
}

sum(3);
// 부족한 인자, 에러가 아니라 NaN 출력
// 인자는 원래 undefined 값을 가지고 있음 (3, undefined) -> default parameter 지정 (a, b = 0) -> (3, 0)

sum(3, 2, 1); // 세번째 인자 무시하고 에러 없이 첫번째 두번째 인자만 더해 출력

// * 나머지 매개변수
function print(a, b, ...rest) {
  console.log(a);
  console.log(b);
  console.log(rest);
}

print(10, 20, 30, 40, 50, 60, 70);

// * 함수의 반환값
function sum(x, y) {
  return x + y;
}

console.log(sum(10, 30)); // 40
