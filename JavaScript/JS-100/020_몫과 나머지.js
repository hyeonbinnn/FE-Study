const n = prompt('두 숫자를 입력해주세요.').split(' ');

// 입력 : 10 2
// 출력 : 5 0

const result = Math.floor(parseInt(n[0], 10) / parseInt(n[1], 10));
const left = parseInt(n[0], 10) % parseInt(n[1], 10);

console.log(result, left);
