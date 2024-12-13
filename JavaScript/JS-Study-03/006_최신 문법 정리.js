// * 템플릿 리터럴
const c = `hi`;

const msg = `${c} 렛츠고우`;
console.log(msg);

// *구조 분해 문법
const arr = ['apple', 10];
const [myFruit, myNum] = arr;

console.log(myFruit);
console.log(myNum);

// * 객체와 별칭
const obj = {
  skill: 'js',
  age: 31,
};

const mySkill = obj.skill;
console.log(mySkill);

const { skill, age } = obj;
console.log(skill);
console.log(age);

// const { skill: mySkill, age: myAge } = obj;
// console.log(mySkill);
// console.log(myAge);

// * 스프레드 오퍼레이터
const num = {
  a: 10,
  b: 20,
};
console.log(num);

const user = {
  ...num,
  c: 40,
};
console.log(user);

// const user = {
//   a: num.a,
//   b: num.b,
//   c: 40,
// };

const arr2 = ['a,', 'b'];
console.log(arr2);

const newArr2 = [...arr2, 'c', 'd'];
console.log(newArr2);
