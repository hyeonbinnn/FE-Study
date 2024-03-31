const info = { name: 'kim', gender: 'female', age: 25, alive: true };

// * 1. 객체 => JSON 형식 문자열
const strObject = JSON.stringify(info);
console.log(typeof strObject, strObject);
// 출력: string {"name":"kim","gender":"female","age":25,"alive":true}

// * 2. 객체 => JSON 형식 문자열 + prettify
const strPrettyObject = JSON.stringify(info, null, 2);
console.log(typeof strPrettyObject, strPrettyObject);
// 출력:
// string {
//   "name": "kim",
//   "gender": "female",
//   "age": 25,
//   "alive": true
// }

// replacer
// 값의 타입이 Number면 필터링되어 반환되지 않음
function filter(key, value) {
  return typeof value === 'number' ? undefined : value;
}

// * 3. 객체 => JSON 형식의 문자열 + replacer + prettify
const strFilteredObject = JSON.stringify(info, filter, 2);
console.log(typeof strFilteredObject, strFilteredObject);
// 출력:
// string {
//   "name": "kim",
//   "gender": "female",
//   "alive": true
// }

const arr = [3, 8, 'false'];

// * 4. 배열 객체 => 문자열
const strArray = JSON.stringify(arr);
// console.log(typeof strArray, strArray);
// 출력: string [3,8,"false"]

// replacer
// 모든 값을 대문자로 변환된 문자열을 반환
function replaceToUpper(key, value) {
  return value.toString().toUpperCase();
}

// * 5. 배열 객체 => 문자열 + replacer
const strFilteredArray = JSON.stringify(arr, replaceToUpper);
console.log(typeof strFilteredArray, strFilteredArray);
// 출력: string "3,8,FALSE"
