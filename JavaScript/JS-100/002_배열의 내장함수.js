var arr = [200, 100, 300];

arr.push(10000);
console.log(arr);
// 출력: [ 200, 100, 300, 10000 ]

// ES6 문법 (Array destructuring)
[arr[3], arr[2]] = [arr[2], arr[3]];

console.log(arr);
// 출력: [200, 100, 10000, 300]

// 또는

// index 번호 이용해 위치 변경
var arrr = arr[2];
arr[2] = arr[3];
arr[3] = arrr;

console.log(arr);
// 출력: [200, 100, 10000, 300]

// 또는

var arrrr = [200, 100, 300];

// splice 메서드는 배열의 요소를 삭제 또는 교체하거나 새 요소를 추가해 배열의 내용을 변경함
arrrr.splice(2, 0, 10000);
console.log(arrrr);
// 출력: [200, 100, 10000, 300]
