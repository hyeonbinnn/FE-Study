// * 재귀함수 1
// 내가 나를 호출하는 함수
// 반복문 <-> 재귀함수
let n = 100;
let s = 0;
for (let i = 0; i < n + 1; i++) {
  s += i;
}
console.log(s); // O(n) n만큼 반복해야하니까
console.log((n * (n + 1)) / 2); // O(1) 반복 없음

let ss = 1;
for (let i = 1; i < 7; i++) {
  ss *= i;
}
console.log(ss);

// * 재귀함수 2
// 순번    f(n)      n       return     최종
//  1      f(100)   100    100 + f(99)   100+99+98 ... +2+1
//  2      f(99)     99    99 + f(98)    99+98 ... +2+1
//  3      f(98)     98    98 + f(97)    98 ... +2+1
//  4      f(97)     97    97 + f(96)    97 ... +2+1
//  5      f(96)     96    96 + f(95)    96 ... +2+1
//  6      f(95)     95    95 + f(94)    95 ... +2+1
//  ...
//  7      f(2)      2    2 + f(1)       2 +1
//  8      f(1)      1    1

function f(n) {
  if (n <= 1) {
    return 1;
  }
  return n + f(n - 1);
}
console.log(`재귀함수: ${f(100)}`);

function ff(n) {
  if (n <= 1) {
    return 1;
  }
  return n * ff(n - 1);
}
console.log(`재귀함수: ${ff(5)}`);

// * 재귀함수 3
// 11을 2진수 변환 => 1101
// 2    11    1
// 2    5     1
// 2    2     0
//      1

let result = '';
let x = 11;
while (true) {
  if (x % 2 == 0) {
    result += '0';
  } else {
    result += '1';
  }
  x = Math.floor(x / 2);
  // Math.ceil(): 소수점 올림
  // Math.floor(): 소수점 버림
  // Math.round(): 소수점 반올림

  if (x == 1 || x == 0) {
    result += String(x);
    break;
  }
}
console.log(result.split('').reverse().join(''));

// 재귀함수로 만들기
function 이진법(숫자) {
  if (숫자 == 1 || 숫자 == 0) {
    return String(숫자);
  }
  return 이진법(Math.floor(숫자 / 2)) + String(숫자 % 2);
}

console.log(이진법(11));

// 이진법(Math.floor(숫자 / 2)) + String(숫자 % 2);
// 이진법(11)         이진법(5)   + String(1) => 101 + String(1)
// 이진법(5)          이진법(2)   + String(1) => 10 + String(1)
// 이진법(2)          이진법(1)   + String(0) => 1 + String(0)
// 이진법(1)          1

// * 재귀함수 4
function 문자열역순(문자) {
  if (문자.length == 1) {
    return 문자;
  }
  return 문자[문자.length - 1] + 문자열역순(문자.slice(0, 문자.length - 1));
}

console.log(문자열역순('kimnara'));

// kimnara -> kimnar와 a로 나눔
// kimnar -> kimna와 r로 나눔
// kimna -> kimn와 a로 나눔
// kimn -> kim과 n로 나눔
// kim -> ki와 m로 나눔
// ki -> k와 i로 나눔
// 마지막 k에 대해 재귀 호출하면 문자길이가 1이니까 자신을 반환
// 각 단계에서 반환된 결과를 연결하면 aranmik

// * 재귀함수 5
// 각 자릿수 합 구하기
let sum = 0;
let p = '1231233';
while (true) {
  if (p.length == 1) {
    sum += parseInt(p, 10);
    break;
  }
  let pp = p.split('');
  console.log(pp);
  sum += parseInt(pp.pop(), 10);
  p = pp.join('');
  console.log(p);
}

console.log(sum);
console.log('여기서부터');

// 재귀함수 만들기
function 문자열역순2(문자) {
  if (문자.length == 1) {
    return parseInt(문자, 10);
  }
  console.log(문자.slice(0, 문자.length - 1));
  return 문자열역순2(문자.slice(0, 문자.length - 1)) + parseInt(문자[문자.length - 1], 10);
}

console.log(문자열역순2('1231233'));

// 문자열역순2('1231233') + 3
// 문자열역순2('123123') + 3
// 문자열역순2('12312') + 2
// 문자열역순2('1231') + 1
// 문자열역순2('123') + 3
// 문자열역순2('12') + 2
// 문자열역순2('1') 1을 반환 (조건 만족)
// 다시 돌아가면서 전부 더하면 됨

// * 재귀함수 6
// 피보나치순열(3번째 부터 1번째+2번째 합을 이어서 구함)
let pv = [1, 1, 2, 3, 5, 8, 13, 21, 34];

let a = 1;
let b = 1;
for (let i = 0; i < 5; i++) {
  let c = a + b;
  a = b;
  b = c;
}
console.log(`나는 ${b}`);

function 피보나치(숫자) {
  if (숫자 == 1 || 숫자 == 0) {
    return 1;
  }
  return 피보나치(숫자 - 1) + 피보나치(숫자 - 2);
}
console.log(피보나치(8));

// 피보나치(8)    피보나치(7) + 피보나치(6) => 13+8=21
// 피보나치(7)    피보나치(6) + 피보나치(5) => 8+5=13
// 피보나치(6)    피보나치(5) + 피보나치(4) => 5+3=8
// 피보나치(5)    피보나치(4) + 피보나치(3) => 3+2=5
// 피보나치(4)    피보나치(3) + 피보나치(2) => 2+1=3
// 피보나치(3)    피보나치(2) + 피보나치(1) => 1+1=2
// 피보나치(2)    피보나치(1) + 피보나치(0) => 1
// 피보나치(1)    1 반환 (조건 만족)
// 메모리 낭비인 재귀함수도 있음
