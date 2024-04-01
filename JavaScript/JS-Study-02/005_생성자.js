// * 생성자 (객체 공장장)
// new 연산자가 붙은 함수를 의미하며 인스턴스를 만들 수 있음
// 동일한 프로퍼티와 메서드를 가진 객체를 쉽게 대량 생산할 수 있음

var newArray = new Array(1, 2, 3);
console.log(newArray); // [ 1, 2, 3 ]

// 사용자가 직접 새로운 타입을 만들 수도 있음
function MyOwn() {}
var myObj = new MyOwn();

// 생성자와 인스턴스의 관계
// instanceof / constructor 메서드
function MyOwn2() {}
var myObj2 = new MyOwn2();
console.log(myObj2 instanceof MyOwn2); // true
console.log(myObj2.constructor === MyOwn2); // true

// * 동일한 프로퍼티와 메서드를 가진 객체 대량 생산
// 생성자 함수 생성
function Food(taste) {
  this.taste = taste;
  this.smell = function () {
    console.log(this.taste + '냄시가 난다잉');
  };
}
// 인스턴스 생성
var myFood1 = new Food('특별한 파스타');
var myFood2 = new Food('해물 파스타');
var myFood3 = new Food('토마토 파스타');
myFood1.smell(); // 특별한 파스타냄시가 난다잉
myFood2.smell(); // 해물 파스타냄시가 난다잉
myFood3.smell(); // 토마토 파스타냄시가 난다잉

// * 생성자 함수 this
// new 연산자가 붙으면 함수의 this는 인스턴스를 참조하게 되며,
// new 연산자가 자동으로 인스턴스를 반환하기 때문에 함수안에 return 연산자도 필요 없어지게 됨

// 생성자 함수 생성
function Food2(taste) {
  console.log(this);
  // myFood4의 this는 Food2 객체를 가리킴
  // myFood5의 this는 window 전역 객체를 가리킴

  this.taste = taste;
  this.smell = function () {
    console.log(this.taste + '냄시가 난다잉');
  };
}
// 인스턴스 생성
var myFood4 = new Food2('특별한 파스타');
var myFood5 = Food2('특수 파스타');
