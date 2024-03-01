// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하시오.

const n = prompt('수를 입력하세요.').split(' ');

console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10)));

// Math.pow() 메서드는 제곱을 계산하는데 사용되는 내장 함수

// 또는

const input = prompt('두 숫자를 입력하세요!! 공백 필수!!');
const [a, b] = input.split(' ');

const result = Math.pow(a, b);
console.log(result);
