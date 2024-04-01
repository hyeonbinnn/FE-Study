// * 클로저
// 폐쇄된 공간에 대한 접근 권한을 가진 함수

// 전형적인 함수 스코프
var outer = function () {
  var a = 1;

  var inner = function () {
    var b = 5;
    var c = 6;

    a = a + b + c;
    console.log(a); // 12
  };
  inner();
};

outer();

// * 근데 만약 내부함수가 외부함수보다 오래 살아있다면?
// 즉, outer2 함수가 실행되고 inner 함수를 리턴하면 outer2 함수는 실행 종료되고 inner 함수가 실행됨
// inner2 함수는 outer2 함수가 이미 반환된 후에도 outer2 함수의 a 변수에 대한 접근 권함을 가짐
// 왜? outer2 함수는 메모리에서 사라져도 outer2 함수에 포함된 변수는 여전히 남아있기 때문에!
var outer2 = function () {
  var a = 1;

  var inner2 = function () {
    var b = 5;
    var c = 6;

    a = a + b + c;
    console.log(a); // 12
  };
  return inner2;
};

// 실행 순서 : newInner -> outer2 -> inner2
var newInner = outer2(); // 여기서 outer2 함수는 inner2 함수를 리턴
newInner(); // 따라서 newInner 함수 실행 === inner2 함수 실행

// * 비공개 데이터를 가진 객체 만들기
var person = (function () {
  var age = 15;

  return {
    name: 'kim',

    getAge: function () {
      console.log(age);
    },

    setAge: function (val) {
      age = val;
      console.log(age);
    },
  };
})();

person.getAge(); // 15
person.setAge(30); // 30

person.age = 50;
person.getAge(); // 30이 출력됨, 왜? getAge와 setAge 함수를 통해서만 접근 가능
