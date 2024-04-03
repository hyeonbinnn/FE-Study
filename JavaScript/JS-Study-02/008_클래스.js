// * 클래스 문법
// 자바스크립트의 타입 생성 방법을 다른 언어와 비슷하도록 보기 쉽게 개선한 것이 바로 자바스크립트 클래스
// extends 연산자를 통해 상위 타입의 프로퍼티를 상속받음!
// super 메서드를 통해 자식 클래스의 생성자 함수가 부모 클래스의 생성자 함수를 덮어 씌우는 것을 방지할 수 있음!

class User {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
}

var me = new User('진구');
me.sayName(); // 진구

// 클래스를 사용하지 않고 만들기
// function User(name) {
//   this.name = name;
// }

// User.prototype.sayName = function () {
//   console.log(this.name);
// };

// var me = new User('진구');
// me.sayName(); // 진구

// * 클래스 상속
// 부모 클래스
class Food {
  constructor(el1, el2) {
    this.inside1 = el1;
    this.inside2 = el2;
  }

  taste() {
    return this.inside1 + '과 ' + this.inside2 + ' 맛이 난다!';
  }
}

var food = new Food('치킨', '해산물');
console.log(food.taste()); // 치킨과 해산물맛이 난다!

// 자식 클래스
// 슈퍼 타입의 생성자를 호출 -> 슈퍼 타입은? 부모!
class NewFood extends Food {
  constructor(el1, el2, el3) {
    super(el1, el2);
    this.inside3 = el3;
  }
  flavor() {
    return this.inside3 + '의 맛도 나네~';
  }
}

var newFood = new NewFood('밥', '카레', '불맛');
console.log(newFood.taste()); // 밥과 카레맛이 난다!
console.log(newFood.flavor()); // 불맛의 맛도 나네~
