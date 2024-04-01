// * 원시타입
// 있는 그대로 저장되는 데이터
// 원시값을 변수에 할당하면 값이 복사되어 들어감
// 불리언(true, false), 숫자(1,2,3), 문자열("안녕"), null(값이 없음), undefined(정의되지 않은 값), Symbol(유일하고 불변 데이터 유형)
var value = '7';
console.log(value);

var one = 1;
var two = 2;
one = two;
one = 3;
console.log(two);

// typeof는 원시값의 종류를 알 수 있게 해주는 메서드
console.log(typeof 1);
console.log(typeof '안녕');
console.log(typeof true);
console.log(typeof undefined);

// 원시 타입인데 결과값이 object?
console.log(typeof null);
// 그래서 null로 타입을 확인하려면
if (value === null) {
  console.log('성공');
} else {
  console.log('실패');
}

// * 참조타입
// 자바스크립트 객체 (원시 타입 빼고 전부 참조 타입)
// 변수에 값을 직접 저장하지 않고, 참조 값은 객체에 저장
// 변수에는 객체에 대한 참조가 저장
// 이 참조는 메모리 상의 객체의 위치를 가리킴 === 데이터의 주소
// 객체 {}, 배열 [], 함수(function), 날짜(Date), 정규표현식(RegExp)

var objOne = { one: 1 };
var objTwo = { two: 2 };

objTwo = objOne;
console.log(objTwo); // { one: 1 }

// 여러 변수가 같은 객체를 참조할 수 있음
// 변수를 통해 객체를 수정하면, 모든 변수에서 해당 객체의 변경 사항이 반영됨
objTwo.one = 3;
console.log(objOne); // { one: 3 }

// * 원시래퍼타입
// 원시타입도 참조타입처럼 사용 가능? (string, number, boolean)
// 원시타입이지만, 객체처럼 메서드 사용 가능 => 원시 메서드

var str = 'hello world';
console.log(str.length);

// 원시 타입을 객체처럼 사용하는 순간, 자바스크립트 내부에서 사용하는 데이터의 인스턴스를 만들게 됨
// 이렇게 만들어진 객체는 코드를 실행 후 바로 다음 줄에서 파괴됨 => 오토박싱
var name = 'bit';
console.log(name.concat('coin'));

// 오토박싱 풀어서 해석
var name = 'bit';
var temp = new String(name); // 임시변수
console.log(temp.concat('coin'));
temp = null; // 해제

// 점 연산자로 바로 coin 넣어보기 (에러)
var name2 = 'bit';
name2.coin = 'coin';
console.log(name2.coin); // undefined

// WHY? 풀어서 해석
var name2 = 'bit';
var temp2 = new String(name2);
temp2.coin = 'coin';
temp = null;

var temp2 = new String(name2);
console.log(temp2.coin); // undefined
