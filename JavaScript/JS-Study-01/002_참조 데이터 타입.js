// * 참조 데이터 타입
// 메모리 안에 여러 개의 값을 저장하기 때문에 힙이라는 별도의 공간에 값을 저장하고 변수에는 힙을 가리키는 메모리 주소 값만 저장, 변수를 사용할 때 주소 값을 참조해서 사용
// 배열, 객체, 함수

// * 배열
// index는 배열의 위치를 나타내고 0부터 시작
const arr = [1, 2, 3];
console.log(arr);
console.log(arr[2]);

// * 객체
// 여러 타입을 가진 데이터들의 집합
// 각각의 요소가 키와 값으로 구성되고 이걸 프로퍼티라고 함
const obj = {
  name: '철수',
  age: 20,
  job: '개발자',
};
console.log(obj);

// 프로퍼티 사용 방법 (점 표기법, 대괄호 표기법)
console.log(obj.name);
console.log(obj['name']);

// * 배열과 객체 중첩
const arr2 = [1, 2, 3, [4, 5]];
console.log(arr2);

const arr3 = [1, 2, 3, { name: '철수' }];
console.log(arr3);

const obj2 = {
  arr: [1, 2, 3],
  something: {
    name: '철수',
    age: 20,
  },
};
console.log(obj2);

// * 형변환(다른 type -> number)
console.log(+'10');
console.log(Number('10')); // 권하지 않음
console.log(parseInt('10')); // 권장
console.log(parseInt('10.1')); // 권장
console.log(parseInt(true)); // NaN
console.log(parseInt(false)); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// * 형변환(다른 type -> string)
let hyeonbin = 10;
console.log(hyeonbin.toString()); // 권장, 10.toString() 10.까지를 소숫점으로 봄
console.log('' + 10);
console.log(String(10));

// * 형변환(다른 type -> boolean)
let hojun2 = 10;
console.log(Boolean(-1));
console.log(Boolean(0));
console.log(Boolean(1000));
console.log(!!1000);
console.log(!!hojun2);
