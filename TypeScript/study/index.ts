// 배열 요소 접근

// 객체 요소 접근
interface Person11 {
  name: string;
  age: number;
  [key: string]: any; // 인덱스 시그니처 (Index Signature)
}

const person11: Person11 = {
  name: '덕배',
  age: 30,
};

person11.job = '개발자'; // 동적으로 프로퍼티 추가
console.log(person11);
