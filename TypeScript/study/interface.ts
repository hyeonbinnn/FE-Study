// 인터페이스 예제
interface personAge {
  age: number;
}

function logAge(obj: personAge) {
  console.log(obj.age);
}

let person = { name: '덕수', age: 35 };
logAge(person); // 35

// 변수와 인터페이스
interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

let todo: Todo;

todo = { id: 1, content: 'typescript', completed: true };

// 함수 인터페이스의 정의
interface SquareFunc {
  (num: number): number;
}

const squareFunc: SquareFunc = function (num: number) {
  return num * num;
};

console.log(squareFunc(10)); // 100

// 클래스와 인터페이스
interface MemoI {
  id: number;
  content: string;
  completed: boolean;
}

class Memo implements MemoI {
  constructor(public id: number, public content: string, public completed: boolean) {}
}

const memo = new Memo(1, 'typescript', false);
console.log(memo);

interface NoteI {
  name: string;
  sayHoo(): void;
}

class Note implements NoteI {
  constructor(public name: string) {}

  sayHoo() {
    console.log(`안녕, ${this.name}! 노트필기를 하자!`);
  }
}

function greeter(note: NoteI): void {
  note.sayHoo();
}

const no = new Note('덕배');
greeter(no); // 안녕, 덕배! 노트필기를 하자!

// 덕 타이핑
interface DuckI {
  quack(): void;
}

class OneDuck implements DuckI {
  quack() {
    console.log('꽥꽥!');
  }
}

class TwoDuck {
  quack() {
    console.log('꽤애액꽤애액');
  }
}

function makeNoise(duck: DuckI): void {
  duck.quack();
}

makeNoise(new OneDuck()); // 꽥꽥!
makeNoise(new TwoDuck()); // 꽤애액꽤애액

// 선택적 프로퍼티
interface UserInfo {
  username: string;
  password: string;
  age?: number;
  address?: string;
}

const userInfo: UserInfo = {
  username: '최강덕배',
  password: '123456',
};

console.log(userInfo); // { username: '최강덕배', password: '123456' }

// 인터페이스 상속
interface Mother {
  name: string;
  age?: number;
}

interface Father {
  phone: string;
}

interface Son extends Mother, Father {
  grade: number;
}

const son: Son = {
  name: '덕배',
  age: 30,
  grade: 3,
  phone: '010-1234-1234',
};
