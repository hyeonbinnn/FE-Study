// * 프로토타입
// 객체 지향 프로그래밍에서 상속을 구현하는 방식
// 모든 객체는 다른 객체를 기반으로 만들어지고, 이를 프로토타입 체인을 통해 상속받음

// 생성자 함수보다 좀 더 효율적인 객체 생산 방식
function Food(name) {
  this.name = name;
  this.smell = function () {
    console.log(this.name + '냄새가 난다');
  };
}

var myFood = new Food('로제 파스타');
var myFood2 = new Food('까르보나라');

console.log(myFood.smell === myFood2.smell); // false
// 결과 값에서 서로 다른 참조를 하고 있음
// 왜? 객체를 생성할 때마다 별개의 함수가 계속 만들어져서 낭비!

// *this로 함수 재사용
// smell 함수를 바깥으로 빼기
// 두 객체의 메서드는 같은 함수를 참조하게 됨
function smell() {
  console.log(this.name + '냄새가 난다');
}

function Food(name) {
  this.name = name;
  this.smell = smell;
}

var myFood = new Food('로제 파스타 ');
var myFood2 = new Food('까르보나라 ');

myFood.smell(); // 로제 파스타 냄새가 난다
myFood2.smell(); // 까르보나라 냄새가 난다
console.log(myFood.smell === myFood2.smell); // true

// 자바스크립트에서 생성자의 prototype 프로퍼티를 통해 타입의 특징을 정의
// constructor 메서드는 Object 타입의 프로퍼티이며 prototype에 의해 정의
// * Object.prototype.constructor
// 모든 인스턴스는 내부에 [[Prototype]] 프로퍼티를 가지며 이를 통해 생성자의 prototype 프로퍼티를 추적함

Food.prototype.smell = function () {
  console.log(this.name + '냄새가 난다');
};

function Food(name) {
  this.name = name;
}

var myFood = new Food('로제 파스타 ');
var myFood2 = new Food('까르보나라 ');

myFood.smell(); // 로제 파스타 냄새가 난다
myFood2.smell(); // 까르보나라 냄새가 난다
console.log(myFood.smell === myFood2.smell); // true

// * 프로토타입 체인
// 인스턴스의 생성자의 [[Prototype]]을 타고 올라가며 프로퍼티를 탐색하는 현상을 프로토타입 체인이라고 함

// 위 예시를 보면 myFood와 myFood2 인스턴스는 [[Prototype]] 프로퍼티를 가지고 있고, 부모 Food 생성자의 prototype(smell)을 참조하고 있음
// 그리고 부모 Food 생성자의 [[Prototype]] 프로퍼티도 Object의 prototype(constructor)을 참조하고 있음
