// 실수
// var arr = [];

// for (var i = 0; i < 5; i++) {
//   arr[i] = function () {
//     return i;
//   };
// }

// for (var j = 0; j < arr.length; j++) {
//   console.log(arr[j]());
// }

// 바르게 동작하는 코드
// var arr = [];

// for (var i = 0; i < 5; i++) {
//   arr[i] = (function (id) {
//     // ②
//     return function () {
//       return id; // ③
//     };
//   })(i); // ①
// }

// for (var j = 0; j < arr.length; j++) {
//   console.log(arr[j]());
// }

// let 키워드를 사용해 더 깔끔한 코드
const arr = [];

for (let i = 0; i < 5; i++) {
  arr[i] = function () {
    return i;
  };
}

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]());
}
