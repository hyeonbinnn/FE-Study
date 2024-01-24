// 클래스 정의
class FooA {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  sayHoo() {
    console.log(`${this.name} 헬로우`);
  }
}

const fooA = new FooA('덕배');
fooA.sayHoo(); // 덕배 헬로우

// 접근 제어자
class Car {
  public speed: number;
  protected size: string;
  private color: string;

  constructor(speed: number, size: string, color: string) {
    this.speed = speed;
    this.size = size;
    this.color = color;
  }

  accelerate() {
    this.speed += 10;
  }

  getSpeed() {
    return `${this.speed}스피드로 ${this.color} 차를 타고 달려보자!`;
  }
}

const car = new Car(50, '대형차', 'black');

car.accelerate();
console.log(car.getSpeed()); // 60

// public은 클래스 인스턴스를 통해 클래스 외부에서 참조 가능
console.log(car.speed);

// protected는 클래스 인스턴스를 통해 클래스 외부에서 참조 불가능
// console.log(car.size); // error

// private는 클래스 인스턴스를 통해 클래스 외부에서 참조 불가능
// console.log(car.color); // error

class Bike extends Car {
  constructor(speed: number, size: string, color: string) {
    super(speed, size, color);

    // public은 자식 클래스 내부에서 참조 가능
    console.log(this.speed);

    // protected는 자식 클래스 내부에서 참조 가능
    console.log(this.size);

    // private는 자식 클래스 내부에서 참조 불가능
    // console.log(this.color);
  }
}

// static 키워드
class Person1 {
  static counter = 0;
  constructor() {
    Person1.counter++;
  }
}

const person1 = new Person1();
const person2 = new Person1();

console.log(Person1.counter); // 2

// 정적 프로퍼티 및 메소드는 클래스의 인스턴스가 아니라 클래스 자체에 속해 있기 때문에 인스턴스를 통해 직접 접근할 수 없음
// console.log(person2.counter); // error

// 추상 클래스
abstract class Animal {
  // 추상 메소드
  abstract makeSound(): void;
  // 일반 메소드
  move(): void {
    console.log('동물은 움직인다.');
  }
}

// 직접 인스턴스 생성 불가
// new Animal();

class Cat extends Animal {
  // 추상 클래스를 상속한 클래스는 추상 클래스의 추상 메소드를 반드시 구현해야함
  makeSound() {
    console.log('야옹~');
  }
}

const myCat = new Cat();
myCat.makeSound(); // 야옹~
myCat.move(); // 동물은 움직인다.
