// * 호이스팅
// 함수와 변수 선언은 코드를 실행할 때 해당 선언 스코프 최상단으로 끌어올려짐
// 선언한 변수의 값은 끌어올려지지 않음
// let, const, class 선언은 호이스팅 현상이 일어나지 않음 (호이스팅은 일어나지만, 일시적 사각지대 빠지기 때문에 호이스팅일 일어나지 않는 것처럼 보임)

console.log(test());
console.log(testValue());

// * 함수 선언 - 함수 이름
function test() {
  return 'test';
} // test

// * 함수 표현식 - 익명 함수
// 함수를 변수 안에 넣었지만, 이 변수는 변수 이름만 끌어올려지고 값을 모르므로 호이스팅 되지 않음
var testValue = function () {
  return 'testValue';
}; // TypeError: testValue is not a function

// * 변수
// 선언하지 않으면 에러
// 선언한 변수도 값까지 끌어올려지지는 않음 - 변수 이름만 끌어올려짐
console.log(b); // undefined
console.log(a); // ReferenceError: a is not defined

var b = 100;

// 함수에 이름이 있어도 여전히 변수에 값이 없기 때문에 에러가 발생
console.log(testValue2());

var testValue2 = function testValue2() {
  return '호이스팅 테스트';
};

// * if문
console.log(test); // undefined

var condition = false;

if (condition) {
  var test = '테스트';
}
