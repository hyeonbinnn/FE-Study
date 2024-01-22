// 1. ES5 프로토타입 문법
function Me({ name, age }) {
  this.name = name;
  this.age = age;
}

Me.prototype.info = function () {
  return `하이! 내 이름은 ${this.name}, 나이는 ${this.age}`;
};

const me = new Me({ name: '김덕배', age: 30 });
console.log(me.info());
// 출력: 하이! 내 이름은 김덕배, 나이는 30

// 2. ES6 클래스 문법
class Me2 {
  constructor({ name, age }) {
    this.name = name;
    this.age = age;
  }

  info() {
    return `하이! 내 이름은 ${this.name}, 나이는 ${this.age}`;
  }
}

const me2 = new Me2({ name: '김덕배', age: 30 });
console.log(me2.info());
// 출력: 하이! 내 이름은 김덕배, 나이는 30

// 3. 클래스 정의
class Me3 {
  constructor(name) {
    this._name = name;
  }

  sayHoo() {
    console.log(`sayHoo~ ${this._name}`);
  }
}

const me3 = new Me3('덕배');
me3.sayHoo(); // 출력: sayHoo~ 덕배

console.log(me3 instanceof Me3); // true

// 4. 클래스 인스턴스 생성
class Me4 {}

const me4 = new Me4();

class Me44 {}

const me44 = Me4();

// 5. constructor
class Me5 {
  constructor(name, age) {
    // this는 클래스가 생성할 인스턴스를 가리킴
    // name, age는 클래스 필드
    this.name = name;
    this.age = age;
  }

  sayHoo() {
    console.log(`sayHoo~ ${this.name} 나이가 벌써 ${this.age}?`);
  }
}

// 인스턴스 생성
const me5 = new Me5('덕배', 30);

me5.sayHoo();
// 출력: sayHoo~ 덕배 나이가 벌써 30?

// 5-1. constructor 생략
class Me6 {}

const me6 = new Me6();
console.log(me6); // 출력: Me6 {}

me6.num = 5;
console.log(me6); // 출력: Me6 { num: 5 }

// 6. 클래스 메소드 정의
class Calculator {
  plus(x, y) {
    return x + y;
  }
  minus(x, y) {
    return x - y;
  }
}

const calc = new Calculator();

console.log(calc.minus(80, 50)); // 출력: 30
console.log(calc.plus(20, 50)); // 출력: 70

const methodName = 'sayHoo'; // 클래스 메소드 이름

class Me7 {
  constructor({ name, age }) {
    this.name = name;
    this.age = age;
  }

  // 아래 메소드 이름은 `sayHoo`
  [methodName]() {
    return `sayHoo~ ${this.name} 나이가 벌써 ${this.age}?`;
  }
}

console.log(new Me7({ name: '덕배쓰', age: 30 }).sayHoo());
// 출력: sayHoo~ 덕배쓰 나이가 벌써 30?

// 7. Getter, Setter, 정적 메소드
class Me8 {
  constructor(arr = []) {
    this._arr = arr;
  }

  get info() {
    // getter는 반드시 무언가를 반환함
    return this._arr.length ? this._arr[0] : null;
  }

  set info(elem) {
    // this._arr 개별 요소로 분리
    this._arr = [elem, ...this._arr];
  }
}

const me8 = new Me8([1, 2]);

// 클래스 필드 info에 접근하려면 getter가 호출됨
console.log(me8.info); // 출력: 1

// 클래스 필드 info에 값을 할당하면 setter가 호출됨
me8.info = 100;
console.log(me8.info); // 출력: 100

// 이후 배열
console.log(me8._arr); // 출력: [ 100, 1, 2 ]

// 정적 메소드
class Me9 {
  constructor(prop) {
    this.prop = prop;
  }

  static staticMethod() {
    return 'staticMethod';
  }

  prototypeMethod() {
    return this.prop;
  }
}

// 정적 메소드는 클래스 이름으로 호출
console.log(Me9.staticMethod());

const me9 = new Me9(123);

// 정적 메소드는 인스턴스를 호출할 수 없음
console.log(me9.staticMethod()); // TypeError: me.staticMethod is not a function

// 8. 클래스 상속
// 부모 클래스
class Me10 {
  constructor(name) {
    this.name = name;
  }

  sayHoo() {
    console.log(`${this.name}는 나야나!`);
  }
}

// 자식 클래스
class Mee10 extends Me10 {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  sayYoo() {
    console.log(`${this.name}는 또다른 나야나!`);
  }
}

// 인스턴스 생성
const me10 = new Mee10('김덕배', '김덕수');

// 상속된 메소드 호출
me10.sayHoo(); // 출력: 김덕배는 나야나!

// 자식 클래스의 메소드 호출
me10.sayYoo(); // 출력: 김덕배는 또다른 나야나!

// 9. static 메소드와 prototype 메소드 상속
// static 메소드 상속
class Me11 {
  static staticMethod() {
    console.log('나는 부모 클래스');
  }
}

class Mee11 extends Me11 {
  static staticMethod() {
    super.staticMethod();
    console.log('나는 자식 클래스');
  }
}

Mee11.staticMethod();
// 출력 :
// 나는 부모 클래스
// 나는 자식 클래스

// prototype 메소드 상속
class Me12 {
  static staticMethod() {
    return '나는 덕배';
  }
}

class Mee12 extends Me12 {
  static staticMethod() {
    return `${super.staticMethod()} 하이!`;
  }

  prototypeMethod() {
    return `${super.staticMethod()} 하이루!`;
  }
}

console.log(Me12.staticMethod()); // 출력: 나는 덕배
console.log(Mee12.staticMethod()); // 출력: 나는 덕배 하이!

console.log(new Mee12().prototypeMethod());
// TypeError: (intermediate value).staticMethod is not a function

// 10. 오버라이딩
// 부모 클래스
class Me13 {
  sayHoo() {
    console.log('나는 덕배');
  }
}

// 자식 클래스
class Mee13 {
  // 부모 클래스의 메소드를 오버라이딩
  sayHoo() {
    console.log('나는 덕수');
  }
}

// 인스턴스 생성
const me13 = new Mee13();

// 오버라이딩된 메소드 호출
me13.sayHoo(); // 출력: 나는 덕수

// 11. 오버로딩
// 함수 오버로딩을 시뮬레이션하기 위해 arguments 객체 사용
function add() {
  if (arguments.length === 2) {
    return arguments[0] + arguments[1];
  } else if (arguments.length === 3) {
    return arguments[0] + arguments[1] + arguments[2];
  } else {
    console.error('인수 개수 잘못됨');
  }
}

// 오버로딩된 함수 호출
console.log('1:', add(2, 3)); // 출력: 5
console.log('2:', add(2, 3, 4)); // 출력: 9
console.log('3:', add(2, 3, 4, 5)); // 출력: 인수 개수 잘못됨 undefined

// 12. 접근 제어자
// class Me {
//   name; // public
//   protected age;
//   private email;

//   constructor(name, age, email) {
//     this.name = name;
//     this.age = age;
//     this.email = email;
//   }

//   getAge() {
//     return this.age; // protected 멤버는 클래스 내부에서 접근 가능
//   }
// }

// const me = new Me('덕배', 30, 'duckbae@gmail.com')

// console.log(me.name);     // 덕배
// console.log(me.age);      // Error: age is protected
// console.log(me.email);    // Error: email is private
// console.log(me.getAge()); // 30
