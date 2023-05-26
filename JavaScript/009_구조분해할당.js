// * 배열의 구조분해할당
const arr = [1, 2, 3, 4, 5];

// 배열 내부에 값을 새로운 변수에 각각 할당하고자 한다면 하나씩 변수를 선언하고 값을 할당해야 함
// const one = arr[0];
// const two = arr[1];
// const three = arr[2];

// 배열의 구조분해할당을 사용하면 한번에 가능
const [one, two, three] = arr;
console.log(one, two, three);

// * 객체의 구조분해할당
const obj = {
  x: 10,
  y: 20,
};

// 프로퍼티의 값들을 각각의 변수로 구조분해할당
// 객체의 경우 키를 지정해줘야 함
const { x, y } = obj;
console.log(x, y);

// 할당할 때 변수명 지정
// 만약 키값 말고 다른 이름으로 변수를 쓰고 싶다면
const { x: hello, y: world } = obj;
console.log(hello, world);

// * 객체의 중첩 구조분해할당
const obj2 = {
  one: {
    two: {
      twotwo: 'Bingo',
    },
  },
};

// 'Bingo'값을 가진 three에 접근하려면
// const bingo = obj.one.two.three;
// console.log(bingo);

// 구조분해할당 사용
const {
  one: {
    two: { twotwo },
  },
} = obj2;
console.log(twotwo);

// 기존의 키값말고 다른 변수명으로 사용하고 싶다면
const {
  one: {
    two: { twotwo: hi },
  },
} = obj2;
console.log(hi);

// * 함수의 구조분해할당
const obj3 = {
  x: 10,
  y: 20,
};

// function sum(obj3) {
//   return obj3.x + obj3.y;
// }
// console.log(sum(obj3));

// 구조분해 적용
function sum({ x, y }) {
  return x + y;
}
console.log(sum(obj3));

// * 구조분해할당 활용 예제 01
// 변수의 값 교환
// let a = 123;
// let b = 456;
// let temp = a;

// a = b;
// b = temp;

// 구조분해재할당 방식 사용
let a = 123;
let b = 456;

[a, b] = [b, a];

// * 구조분해할당 활용 예제 02
// 구조분해할당에 미리 기본값을 지정
// const [aa, bb] = [10];
// console.log(aa, bb); // 10, undefined

const [aa = 15, bb = 25] = [10];
console.log(aa, bb); // 10, 25

// * 구조분해할당 활용 예제 03
// 중간값을 생략하고 구조분해할당
const arr3 = [1, 2, 3, 4, 5];
const [ab, , cd, , ef] = arr3;
console.log(ab, cd, ef); // 1 3 5

// * 구조분해할당 활용 예제 04
// 나머지 요소를 나머지 인자 구문을 활용해서 한번에 가져오기
const [ba, dc, ...others] = arr3;
console.log(ba, dc, others); // 1 2 [ 3, 4, 5 ]
