// * 스코프
// 범수의 유효 범위
// 변수의 접근성과 생존 기간을 제어
// 이름이 충돌하는 문제를 덜어주고, 자동으로 메모리를 관리함

var func1 = function () {
  var a = 1;
  var b = 2;
  console.log(a + b);
  return a + b;
};

// 전역에서는 함수 스코프에 내에 접근 불가
var a = 20;

func1(); // 3

// * 전역 스코프
// 스크립트 어디서든 접근이 가능하기 때문에 사용이 쉽지만 지양하자
// 타인과의 협업, 라이브러리 사용시 충돌 가능성 내포

// * 함수 스코프
// 함수 내부에서 정의된 변수와 매개변수는 함수 외부에서 접근 불가
// 함수 내부에서 정의된 변수라면 함수의 어느 부분에서도 접근 가능

var func2 = function () {
  var a = 1;
  var b = 2;

  var func3 = function () {
    var b = 5;
    var c = 6;

    a = a + b + c;
    console.log(a);
  };
  func3();
};

func2(); // 12

// * 블록 스코프 (es6)
// 중괄호 안에서만 접근 가능
// 블록 내부에 정의된 변수는 블록의 실행이 끝나면 해제됨

if (true) {
  var value = '안녕';
}
console.log(value); // 안녕

if (true) {
  let value = '친구'; // let, const 키워드는 블록 스코프 안에서만 가능
}
console.log(value); // 안녕
