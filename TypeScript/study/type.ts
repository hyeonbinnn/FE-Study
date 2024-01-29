// 1. string
const str: string = '덕배';

// 2. number
const age: number = 30;

// 3. boolean
const isLoginUser: boolean = false;

// 4. let nullValue: null = null;
let nullValue = null;

// 5. undefined
let undefinedValue: undefined = undefined;

// 6. object
const obj: object = { key: 'value' };
// 구체적인 속성의 타입을 명시할 수도 있음
const detailObj: { key: string; count: number } = { key: 'example', count: 30 };

// 7. array
const arr: number[] = [1, 2, 3];
const arr2: any[] = [1, 'two', true];

// 제네릭을 사용할 수도 있음
const arr3: Array<number> = [1, 2, 3];

// 8. tuple
let arr4: [string, number] = ['덕배', 30];

// 정의하지 않은 타입으로 인덱스 접근 시, 오류 발생
// arr4[1].concat('!'); // Error, 'number' does not have 'concat'
// arr4[4] = 'hello'; // Error, Property '4' does not exist on type '[string, number]'

// 9. enum
enum Color1 {
  Red,
  Green,
  Yellow,
}
let c1: Color1 = Color1.Green;

console.log(c1); // 1

enum Color2 {
  Red = 1,
  Green,
  Yellow,
}
let c2: Color2 = Color2.Green;

console.log(c2); // 2

enum Color3 {
  Red = 1,
  Green = 2,
  Yellow = 4,
}
let c3: Color3 = Color3.Yellow;

console.log(c3); // 4

// 10. any
let anyValue: any = 30;
console.log(anyValue); // 30

anyValue = '덕배 안녕'; // 문자열 할당
console.log(anyValue); // 덕배 안녕

anyValue = true; // 불리언 할당
console.log(anyValue); // true

// 배열 요소가 모든 다른 타입일 때
let mixArray: any[] = [1, '덕배', true];
console.log(mixArray); // [1, '덕배', true]

// 객체의 속성이 모든 다른 타입일 때
let mixObject: any = {
  key1: 30,
  key2: '덕배',
  key3: true,
};
console.log(mixObject); // { key1: 30, key2: '덕배', key3: true }

// 11. void
function example(): void {
  console.log('나는 덕배');
}

function example2(): void {
  return;
}

// 12. never
// 끝나지 않는 함수
function infinite(): never {
  while (true) {
    console.log('나는 끝없는 인간');
  }
}

// 예외를 던지는 함수
function error(message: '나는 에러'): never {
  throw new Error(message);
}
// 이 함수를 호출하면 예외가 발생하고, 함수가 반환하지 않음
error('나는 에러');

// 13. 타입 정의 d.ts
export function me(name: string) {
  console.log(`${name} 하이!`);
}
