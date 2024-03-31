const info = { name: 'kim', gender: 'female', age: 25, alive: true };
const arr = [3, 8, 'false'];

// 1. 객체 => JSON 형식 문자열
const strObject = JSON.stringify(info);
console.log(typeof strObject, strObject);
// 출력: string {"name":"kim","gender":"female","age":25,"alive":true}

// 2. 배열 객체 => 문자열
const strArray = JSON.stringify(arr);
console.log(typeof strArray, strArray);
// 출력: string [3,8,"false"]

// 3. JSON 형식 문자열 => 객체
const obj = JSON.parse(strObject);
console.log(typeof obj, obj);
// 출력: object { name: 'kim', gender: 'female', age: 25, alive: true }

// 4. 문자열 => 배열 객체
const objArray = JSON.parse(strArray);
console.log(typeof objArray, objArray);
// 출력: object [ 3, 8, 'false' ]

const todos = [
  { id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'JavaScript', completed: false },
];

// 1. 배열 => JSON 형식의 문자열
const str = JSON.stringify(todos);
console.log(typeof str, str);
// 출력:
// string [{"id":1,"content":"HTML","completed":true},{"id":2,"content":"CSS","completed":true},{"id":3,"content":"JavaScript","completed":false}]

// 2. JSON 형식의 문자열 => 배열
const parsed = JSON.parse(str);
console.log(typeof parsed, parsed);
// 출력:
// object [
//   { id: 1, content: 'HTML', completed: true },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 3, content: 'JavaScript', completed: false }
// ]
