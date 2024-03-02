// 전체 합 변수
let totalSum = 0;

// for 루프를 통해 1부터 20까지 숫자를 순회
for (let i = 1; i <= 20; i++) {
  // 각 숫자를 문자열로 변환
  let numberStr = i.toString();

  // 각 자리의 숫자를 더할 변수를 초기화
  let digitSum = 0;

  // 문자열의 각 자리 숫자를 반복하여 더하기
  for (let digit of numberStr) {
    // 각 자리의 숫자를 정수로 변환하여 더하기
    digitSum += parseInt(digit);
  }

  // 각 숫자의 자리 수 합인 digitSum을 전체 합에 더하기
  totalSum += digitSum;
}

console.log(totalSum);

// 또는

let n = prompt('숫자를 입력해 주세요.');

let arr = [];
let sum = 0;

for (let i = 1; i <= 20; i++) {
  arr[i] = i;
}

arr.forEach((n) => {
  while (n !== 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
});

console.log(sum);
