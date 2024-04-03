// * es5로 클래스처럼 상속하기

// 기존 프로토타입 공정
function Food(el1, el2) {
  this.inside1 = el1;
  this.inside2 = el2;
}

Food.prototype.taste = function () {
  return this.inside1 + '과 ' + this.inside2 + '맛이 난다!';
};

var myFood = new Food('청국장', '멸치');
console.log(myFood.taste());

// 업그레이드된 공정
// function UpFood(el1, el2, el3) {
//   this.inside1 = el1;
//   this.inside2 = el2;
//   this.inside3 = el3;
// }

// UpFood.prototype.taste = function () {
//   return this.inside1 + '과 ' + this.inside2 + '맛이 난다!';
// };

// UpFood.prototype.flavor = function () {
//   return this.inside3 + '의 풍미도 있네!';
// };

// var myUpFood = new UpFood('청국장', '멸치', '다시마');
// console.log(myUpFood.taste());
// console.log(myUpFood.flavor());

// 그러나 2개의 공정이 비슷해서 겹치기 때문에 효율적이지 않음!
// 좀 더 효율적인 방법이 없을까나?

// * 1. 생성자 훔치기
// call 메서드를 사용하면 앞에서 함수가 실행될 때 바라볼 this 값을 결정할 수 있음
// 생성자 함수의 this는 생성자 함수의 인스턴스를 가리킴
// 따라서 Food.call의 this는 바로 UpFood의 인스턴스를 가리킴
// 이처럼 call/apply 메서드를 이용해 인스턴스를 인수로 전달하고 프로퍼티를 상속받는 방법을 생성자 훔치기라고 표현함

// 프로퍼티를 상속 받는 타입을 서브 타입 - 하위 타입 (UpFood)
// 상속을 해주는 타입을 슈퍼 타입 - 상위 타입 (Food)
function UpFood(el1, el2, el3) {
  Food.call(this, el1, el2);
  this.inside3 = el3;
}

// * 2. 프로토타입 상속
// Object.create 메서드는 [[Prototype]]이 참조할 생성자의 prototype 프로퍼티를 설정
// 따라서 프로토타입 체인을 통해 상위 타입의 메서드도 사용 가능!
// 주의해야할 점은 인스턴스의 constructor를 상속 받는 쪽으로 설정해야 함
UpFood.prototype = Object.create(Food.prototype);
UpFood.prototype.constructor = UpFood;
// JavaScript에서 객체는 constructor라는 특별한 프로퍼티를 가지며, 이 프로퍼티는 해당 객체를 생성한 생성자 함수를 가리킴
// UpFood.prototype.constructor = Food; 바로 이렇게!!
// 하지만 다른 객체로 교체(Food)되면, 새로운 생성자 함수를 가리켜서, UpFood로 보정하는 역할이 필요!

UpFood.prototype.flavor = function () {
  return this.inside3 + '의 풍미도 있네!';
};

var myUpFood = new UpFood('청국장', '멸치', '다시마');
console.log(myUpFood.inside1);
console.log(myUpFood.inside2);
console.log(myUpFood.inside3);

console.log(myUpFood.taste());
