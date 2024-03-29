// 2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만드시오.

function one(n) {
  function two(value) {
    const sq = Math.pow(value, n);
    return sq;
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10)); // 100
console.log(b(10)); // 1000
console.log(c(10)); // 10000
