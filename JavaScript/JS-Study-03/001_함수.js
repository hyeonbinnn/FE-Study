// * 1. 함수 선언문
// 함수 이름 필수
// 선언된 위치와 상관없이 스코프 내 어디에서나 호출 가능
function logText() {
  console.log('얄루');
}
logText();

// * 2. 함수 표현식
// 함수를 변수에 할당
// 함수 이름 생략 가능하고, 함수는 변수에 할당된 이후에만 호출 가능
const lt = function logText() {
  console.log('얄루얄루');
};
lt();

// * 3. 화살표 함수
// 1) 간결한 문법
// 2) this 바인딩
// 3) 암묵적 반환

const logText2 = () => {
  console.log('얄류얄류얄류');
};
logText2();

const a = () => 'a';
console.log(a());

const b = (num) => num;
console.log(b('2'));

// * 4. 함수의 파라미터
const logText3 = (msg) => {
  console.log(msg);
};
logText3('얄류잉');

// * 5. 함수의 반환값
const logText4 = (name) => {
  return '나의 이름은 ' + name + ' 입니다';
};
console.log(logText4('얄류잉'));

const ml = logText4('밀리');
console.log(ml);

// * 6. 일급함수
// 1) 함수의 인자로 전달
const first = (name) => {
  name();
};

first(function () {
  console.log('철수');
}); // 철수

// 2) 변수에 직접 할당
const second = (name) => {
  console.log('그의 이름은 ' + name);
};

const sn = second;
sn('철수'); // 그의 이름은 철수

// 3) 함수의 반환값으로 사용
const third = (name) => {
  return function (name2) {
    console.log(`그들의 이름은 ${name}와 ${name2}입니다.`);
  };
};

const tn = third('철수');
tn('영희');
