// 객체 기반 언어
// 키 : 값
let obj = {
  a: 10,
  b: 20,
  c: 30,
};
console.log(obj); // { a: 10, b: 20, c: 30 }

// 객체의 축약문법
obj.d = 50;
console.log(obj); // { a: 10, b: 20, c: 30, d: 50 }

let a = 30;
let b = 500;
let objA = {
  a: a,
  b,
};

console.log(objA.a); // 30
console.log(objA.b); // 500

let kim = {
  coding() {
    console.log('코딩');
  },
  // 속성: 함수 연결
  // coding: function () {
  //   console.log('코딩');
  // },
};

kim.coding();
