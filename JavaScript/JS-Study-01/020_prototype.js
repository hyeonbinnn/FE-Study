// 1. 프로토타입
const carPrototype = {
  color: function () {
    console.log('black color');
  },
};

function Car() {}

Car.prototype = carPrototype;

const miniCar = new Car();

miniCar.color(); // 출력: black color

// 2. prototype 프로퍼티
function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.drive = function () {
  console.log('Driving a', this.make, this.model);
};

const myCar = new Car('Hyundai', 'Grandeur');

myCar.drive(); // 출력: Driving a Hyundai Grandeur

// 3. 프로토타입 체인
// 부모 객체
const bigCarPrototype = {
  start: function () {
    console.log('BigCar starting');
  },
};

// 자식 객체
const miniCarPrototype = Object.create(bigCarPrototype);
miniCarPrototype.drive = function () {
  console.log('MiniCar driving');
};

// 인스턴스 생성
const myCars = Object.create(miniCarPrototype);

// 인스턴스가 프로토타입 체인을 따라 메소드 사용
myCars.drive(); // 출력: MiniCar driving
myCars.start(); // 출력: BigCar starting

// 4. prototype vs __proto__
function Car(color) {
  this.color = color;
}

const myCar2 = new Car('black');

console.dir(Car); // prototype 프로퍼티가 있다.
console.dir(myCar2); // prototype 프로퍼티가 없다.
