// * Map
// Object랑 유사하지만 다른 자료형도 받을 수 있음
let m = new Map();

m.set('하나', '1');
m.set(1, '하나');
m.set(true, 1);
m.set(false, 0);

console.log(m.get('하나'));
console.log(m.get(true));
console.log(m.has('하나'));
console.log(m.delete('하나'));
console.log(m.has('하나'));
console.log(m);
console.log(m.size);

for (mm of m) {
  console.log(`m을순회중입니다. ${mm[1]}`);
}

let temp = new Map([
  [1, 10],
  [2, 20],
  [3, 30],
  [4, 40],
]);

console.log(temp);

// * Set
// 교집합, 차집합, 합집합 - 중복을 허용하지 않음
let s = new Set('abcdeeeeeeeeeeeeeee');
console.log(s.size);

s.add('f');
console.log(s);

for (ss of s) {
  console.log(ss);
}

let s2 = new Set('abcdeeeeeeeeeeeeeeeeeeee'.split(''));
console.log(s2);

s2.delete('b');
console.log(s2.has('a'));
console.log(s2);
