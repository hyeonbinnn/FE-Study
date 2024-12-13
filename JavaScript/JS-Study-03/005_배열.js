// * 배열 요소 및 메서드
var arr = [];

arr[0] = 10;
console.log(arr);

arr[1] = 20;
console.log(arr);

var arr = ['a', 'b'];
console.log(arr);
console.log(arr.length);

var arr = [];
arr.push(30);
arr.push('a');
console.log(arr);
arr.pop(); // 마지막 삭제
console.log(arr);
arr.splice(0, 1); // 0번째 1개 삭제
console.log(arr);

var arr = [10, 30, 50, 'a', 'b', 'c'];
console.log(arr);

console.log(arr.slice(3));
console.log(arr.slice(3, 5));
console.log(arr.shift()); // 배열 첫번쩨 값을 꺼냄
console.log(arr.unshift(1, 2)); // 처음에 값을 추가
console.log(arr);

// * 배열의 반복문
// arr.forEach(function (value) {
//   console.log(value);
// });

arr.forEach((value) => console.log(value));

// * 배열 주요 API (map, filter)
var arr = [10, 20, 30];
arr.map((item) => {
  return item * 10;
}); // map은 배열의 모든 요소에 대해 주어진 함수를 실행, 새로운 값을 반환

arr.filter((item) => {
  if (item === 10) {
    return true;
  }
}); // filter는 배열의 각 요소에 대해 주어진 함수를 실행하고, 그 결과가 true인 요소만 모아 새로운 값을 반환

// map과 동일
var newArr = [];
arr.forEach((item) => {
  newArr.push(item * 10);
});
console.log(newArr);

// filter와 동일
var newArr = [];
arr.forEach((item) => {
  if (item === 10) {
    newArr.push(item);
  }
});
console.log(newArr);
