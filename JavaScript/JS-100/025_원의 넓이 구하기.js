// 원의 넓이: 반지름의 길이 x 반지름의 길이 x 3.14
// 입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만들어 주세요.

function circle(n) {
  const result = n * n * 3.14;
  return result;
}

const r = prompt('반지름 길이를 입력해주세요.');

console.log(circle(r));

// 또는

const calculateCircleArea = (rad) => {
  // Math.PI는 원주율을 나타내며, JavaScript에서 제공하는 내장 상수
  const area = Math.PI * Math.pow(rad, 2);
  return area;
};

const rad = 10;
const circleArea = calculateCircleArea(rad);

console.log('원의 넓이:', circleArea);
// 촐력: 원의 넓이: 314.1592653589793
