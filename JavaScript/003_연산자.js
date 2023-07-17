// * 할당연산
let z = 10;
z = z + 10;
z += 10;

// * 단항연산
console.log(-2);
console.log(-(-2));
console.log(+-2);
console.log(+(+2));
console.log(+(+'2'));

// * 산술 연산자 (+, -, *, /, %, **)
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(10 / 5); // 2 몫 값
console.log(10 % 5); // 0 나머지 값
console.log(2 ** 3); // 8 2의 3승

// * 증감 연산자 (++ 1, -- 1)
let number = 10;
number++;
console.log(number); // 11
number--;
console.log(number); // 10
++number; // 선증가 후할당
--number;
number++; // 선할당 후증가
number--;

// * 비교 연산자 (<>, <=, >=, ==, ===, !==)
const a = 123;
const b = '123';
console.log(a == b); // true (추상 비교), 변수의 type 확인하지 않음
console.log(a === b); // false (엄격 비교), 권장, 변수의 type 확인, 1. 견고한 코딩, 2. 성능상

const x = 3;
const y = 7;
console.log(x > y);
console.log(x >= y);
console.log(x < y);
console.log(x <= y);
console.log(x != y);
console.log(x !== y);
console.log(3 != '3'); // false
console.log(3 !== '3'); // true

const c = 10;
const d = 20;
console.log(c < d); // true
console.log(c === d); // false
console.log(c !== d); // true (!== 같지 않다)

// * 논리 연산자 (&&, ||, !)
const e = 2 < 3;
const f = 30 > 50;
console.log(e && f); // false (두개다 참일 때 true)
console.log(e || f); // true (한개가 참일 때 true)
console.log(!e); // false (원래 값은 true지만 부정함)

// * 삼항 연산자
// 조건 ? 참일 때 실행될 부분 : 거짓일 때 실행될 부분
console.log(2 < 3 ? '참' : '거짓'); // 참
console.log(2 > 3 ? '참' : '거짓'); // 거짓

// 3항 연산자 실습
// 통장에 10000원 초과해서 있으면 '부자'
// 통장에 10000원 이하 있으면 '부를 바라는 자'
const money = 5000;
const result = money > 10000 ? '부자' : '부를 바라는 자';
console.log(result);

// 3항 연산자 실습
// 통장에 100000원 초과해서 있으면 '초부자'
// 통장에 10000원 초과해서 있으면 '부자'
// 통장에 10000원 이하 있으면 '부를 바라는 자'
const money2 = 100001;
const result2 = money2 > 10000 ? '🤑 초부자' : money2 > 10000 ? '😎 부자' : '😢 부를 바라는 자';
console.log(result2);

// * nullish 연산자 (??)
// 여러 개의 피연사자 중 값이 확정되어 있는 변수를 찾음
const g = undefined;
const h = null;
const i = '철수';
console.log(g ?? h ?? i); // 철수

// * 비트 연산자 (&, |, ~, ^, <<, >>)
// 자바스크립트에서는 거의 사용하지 않음
// 뭐가 있는지 알고만 있자
console.log(~3);
console.log(~~3);
console.log(~~3.14); // 알고리즘 풀이에서 많이 사용
console.log(parseInt(3.14));
console.log(parseInt('3.14'));
console.log(parseInt('3.14abc'));

// * 대입 연산자 (=)
// 복합 대입 연산자 (+=, -=, *=, /=, %=, **=)
let num = 10;
num = num + 2;
console.log(num); // 12
num += 2;
console.log(num); // 14
num /= 2;
console.log(num); // 7

// * 전개구문 (...)
// 반복이 가능한 어떤 객체에 적용할 수 있는 문법의 한 종류
// 반복이 가능 = 배열, 문자열, 전개구문 = 꺼내서 펼침
// 모던 자스에서 굉장히 유용하게 많이 쓰임
const num2 = [1, 2, 3];
const num3 = [4, 5, 6];
const num5 = [...num2, ...num3];
console.log(num2); // 배열로 보여줌
console.log(...num2); // num2가 가지고 있는 배열을 쫙 펼쳐서 보여줌
console.log(num5);
console.log(...num5);
