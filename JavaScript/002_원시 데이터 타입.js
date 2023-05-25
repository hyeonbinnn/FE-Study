// * 원시 데이터 타입
// 메모리 안에 변수를 위한 공간이 있고 그 안에 값이 들어있어 직집적으로 하나의 값만 가리킴
// 객체가 아니면서 메서드도 가지지 않는 데이터
// string, number, bigint, boolean, undefined, null, symbol = 7가지

// * string
// 큰 따옴표(""), 작은 따옴표(''), 백틱(``)으로 표현
const name = '철수';
console.log(typeof name);

const age = 20;
const job = '개발자';

// 따옴표
const msg = '저는 ' + job + '이고, ' + age + '살 입니다.';
console.log(msg);
// 백틱
const msg2 = `저는 ${job}이고, ${age}살 입니다.`;
console.log(msg2);

// * number
const number = 123;
console.log(typeof number);

// * bigint
// 숫자 데이터 타입이 - (2의 53승 -1) ~ (2의 53승 -1)의 범위를 넘아가면 bigint로 지정 -> 숫자 뒤에 n을 붙임
const bigint = 123n;
console.log(typeof bigint);

// * boolean
// 참 또는 거짓 (true, false)
const isTrue = 10 > 20;
console.log(typeof isTrue);
console.log(isTrue);

// * undefined
// 값이 아직 지정되지 않았음을 나타냄
// 무언가를 선언했을 때 아무 값도 넣지 않았지만 이미 undefined로 세팅됨
let hello;
console.log(hello);

// * null
// 값이 아예 존재하지 않는다는 걸 나타냄
