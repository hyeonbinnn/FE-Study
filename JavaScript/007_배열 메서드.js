// * 배열 요소를 추가, 삭제
// # push(), pop(), unshift(), shift()

const arr = [1, 2, 3, 4, 5];

arr.push(6);
arr.push(7, 8, 9);
console.log(arr); // 요소 끝에 추가

arr.pop();
console.log(arr); // 요소 삭제, 끝에서부터 하나의 요소를 제거하고 반환

arr.unshift(10, 20, 30); // 앞부분에 요소 추가
console.log(arr);

arr.shift(); // 앞부분 요소 삭제
console.log(arr);

// * 주어진 함수를 배열 요소에 각각 실행
// # forEach()
// 원본 배열의 값을 변경하지 않고, 값을 리턴하지도 않음

const arr2 = [1, 2, 3, 4, 5];

function print(number, index) {
  console.log(`${index} 위치의 요소 : ${number}`);
}

arr2.forEach(print);

// 화살표 함수로 표현
const print2 = (number, index) => {
  console.log(`${index} 위치의 요소 : ${number}`);
};

arr2.forEach(print2);

// forEach 인자로 넣기
arr2.forEach((number, index) => {
  console.log(`${index} 위치의 요소 : ${number}`);
});

// 요소를 추가해 새로운 배열을 얻을 수 없음
const newArr = arr2.forEach((number, index) => number + 1);
console.log(newArr); // undefined

// * forEach()와 흡사하게 동작하지만, map()은 새로운 배열을 반환
// # map()
// 어떤 함수를 이용해 처리한 결과를 저장해야한다면 forEach()가 아니라 map()을 사용

const newArr2 = arr2.map((number, index) => number + 1);
console.log(newArr2); // [2, 3, 4, 5, 6] 원본 배열 요소에 각각 1씩 더함

// * 배열 요소를 검색
// # includes(), find(), findIndex(),

const arr3 = ['hello', 'world'];

console.log(arr3.includes('hello')); // 찾는 값이 있으면 true, 없으면 false
console.log(arr3.includes('bob'));

const arr4 = [1, 2, 3, 4, 5];

console.log(arr4.find((number) => number > 3)); // 4, 주어진 판별 함수를 만족하는 첫번째 요소의 값을 반환 (판별함수 : 인자로 조건을 가짐)
console.log(arr4.findIndex((number) => number > 3)); // 3번 인덱스, 주어진 판별 함수를 만족하는 첫번째 요소의 인덱스 값을 반환, 찾지 못하면 -1 반환

// * 배열 요소를 수정
// # fill(), slice(), splice(), join(), concat(), filter(), reduce()

const arr5 = [1, 2, 3, 4, 5];

arr5.fill(50);
console.log(arr5); // 배열을 지정한 값으로 전부 채움, 요소를 수정할 때 원본 배열 자체를 수정
arr5.fill(50, 2); // [1, 2, 50, 50, 50] 시작과 종료 인덱스를 선택적으로 지정 가능
console.log(arr5);
arr5.fill(50, 2, 4); // [1, 2, 50, 4, 5] 종료 인덱스 이전 인덱스까지 반환
console.log(arr5);

const arr6 = [1, 2, 3, 4, 5];

console.log(arr6.slice(2)); // (시작 위치를 의미하는 인덱스, 종료 위치를 의미하는 인덱스), 배열의 복사본을 조각내서 새로운 배열로 반환
console.log(arr6.slice(2, 4)); // 종료 인자의 이전 3번 인덱스까지 잘라서 반환

arr6.splice(2);
console.log(arr6); // (필수 인자 시작 인덱스, 선택적 인자로 배열에서 제거할 요소의 개수와 배열에 추가할 요소를 지정)
arr6.splice(2, 1);
console.log(arr6); // [1, 2, 4, 5]
arr6.splice(2, 1, 999);
console.log(arr6); // [ 1, 2, 999, 4, 5 ] 제거한 위치에 채워넣기

const arr7 = ['hello', 'word', 'hi', 'wow'];
const numbers = [123, 456];

console.log(arr7.join()); // 배열의 모든 요소들을 이어붙여서 새로운 문자열로 반환

console.log(arr7.concat(numbers)); // 인자로 주어진 배열이나 값들을 기존 베열에 합쳐서 새로운 배열로 반환
console.log(arr7.concat('zzz', 'ㅎㅎㅎ')); // 직접 문자열을 지정해도 하나의 새로운 배열로 반환

const arr8 = [1, 2, 3, 4, 5];

console.log(arr8.filter((number) => number > 3)); // 주어진 판별함수의 결과값이 참인 요소들만 모아서 새로운 배열로 반환 즉, 필터링 (forEach(), map()가 거의 흡사하게 동작)

const arr9 = [1, 2, 3, 4, 5];
const reducer = (acc, value) => acc + value;

console.log(arr9.reduce(reducer)); // 15
// 필수 인자로 reducer 함수가 요구됨
// 배열의 각 요소에 대해서 주어진 reducer 함수를 실행한 다음 하나의 값을 반환
// 배열의 요소들이 하나씩 차례대로 누산기 값과 더해져서 최종 누적된 값을 반환
/**
 * reducer 함수
 * 필수 인자인 누산기(acc), 현재 값(cur)을 가지고,
 * 선택적으로 현재 인텍스(idx), 원본 배열(src) 인자를 가질 수 있음
 */

console.log(arr9.reduce(reducer, 10)); // 25
// 누산기 초기값을 지정하면 acc가 10이니까, 10에다 1을 더하고 11에다 2를 더하게 됨
