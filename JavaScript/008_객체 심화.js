// * for in
// # 반복문의 객체 버전
// 배열을 순회할 때는 for of, forEach 등을 사용하자!
// 객체에 포함된 모든 키 값을 순회하면서 출력

const obj = {
  x: 1,
  y: 2,
  z: 3,
};

for (key in obj) {
  console.log(key);
}

// * for of 한번 더 알고 가자!
// # 반복문의 배열 버전
// 반복이 가능한 객체 즉, 배열이나 문자열 등에서 사용할 수 있는 반복문의 종류
// 주어진 요소를 차례대로 순회하면서 코드를 실행
// 조건을 만족할 때만 반복하는 게 아니라 배열의 요소들을 처음부터 끝까지 순회하면서 내부에 지정된 코드를 실행

const arr = [1, 2, 3];

for (const i of arr) {
  console.log(i); // 1 2 3
}

// * 객체 축약 표현
const name = '철수';
const country = 'KR';

const user = {
  // name:name,
  // country:country,
  name,
  country, // 프로퍼티 축약
};

console.log(user); // { name: '철수', country: 'KR' }

// * 메서드 축약 표현
// 객체는 변수나 값 이외에도 함수를 프로퍼티로 가질 수가 있는데, 객체의 프로퍼티로 선언이 된 함수를 메서드라고 부름
const obj2 = {
  greeting: function () {
    console.log('Hi!');
  },
};

obj2.greeting(); // Hi!

// 객체 내부에 메서드를 작성할 때는 function 키워드 생략하고 메서드를 축약해서 표현할 수 있음
const obj3 = {
  greeting() {
    console.log('Hi!');
  },
};

obj3.greeting(); // Hi!

// * Object.keys()
// 객체의 프로퍼티를 열거하는데 사용하는 메서드
// 인자로 객체를 전달해주면 지정된 객체가 가지고 있는 키 값을 배열로 반환
const obj4 = {
  x: 10,
  y: 20,
  z: 30,
};

console.log(Object.keys(obj4)); // [ 'x', 'y', 'z' ]

// * 정적 메서드의 호출
//  전역 객체 Object 안에 있는 keys라는 정적 메서드를 사용 (객체를 생성하지 않아도 불러서 사용 가능)
//  정적 메서드들은 생성된 객체에 내장되어 있는 것이 아니라 Object, Array 클래스가 가지고 있기 때문에 앞에 Object, Array 등을 붙여야 사용 가능
// 변수.메서드()로 바로 사용할 수 있는 건 객체의 자체 내장 메서드기 때문 (객체를 생성해여만 가능)

const obj5 = {
  x: 10,
  y: 20,
  z: 30,
};

console.log(Object.keys(obj5)); // [ 'x', 'y', 'z' ]
console.log(Array.isArray(obj5)); // false, isArray는 obj5가 배열이 판별해주는 메서드
console.log(Object.values(obj5)); // [ 10, 20, 30 ]
console.log(Object.entries(obj5)); // [ [ 'x', 10 ], [ 'y', 20 ], [ 'z', 30 ] ] 각각의 프로퍼티 즉, 키와 값의 쌍을 하나의 배열로 묶어서 개별적이 요소로 반환
