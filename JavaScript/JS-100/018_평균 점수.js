// 국어, 수학, 영어 시험의 평균 점수를 구하시오.
// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요.
// 단, 소숫점 자리는 모두 버립니다.

// 입력 : 20 30 40
// 출력 : 30

const scores = prompt('세 과목의 점수를 입력하세요.').split(' ');
let sum = 0;

for (let i = 0; i < 3; i++) {
  sum += parseInt(scores[i], 10); // 십진수의 형태의 숫자로 데이터 타입을 변환함
}

console.log(Math.floor(sum / 3)); // Math.floor 메서드는 소수점 자리를 모두 버림

// 또는

const calculateAverage = (scores) => {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += parseInt(scores[i]);
  }
  return Math.floor(total / scores.length);
};

const inputScores = '20 30 40';
const scoresArray = inputScores.split(' ');

const averageScore = calculateAverage(scoresArray);
console.log(averageScore);

// 또는

const calculateAverage2 = (scores) => {
  // 입력값을 공백으로 분리해 배열을 만듦
  const scoreArray2 = scores.split(' ');

  //map() 함수는 주어진 배열의 각 요소에 대해 제공된 함수를 호출한 결과를 모아 새로운 배열을 생성함
  // 문자 배열을 정수 배열로 변환함
  const scoresInt = scoreArray2.map((score) => parseInt(score, 10));

  // 평균을 계산함
  const average = Math.floor(scoresInt.reduce((acc, curr) => acc + curr, 0) / scoresInt.length);
  return average;
};

const inputScores2 = '20 30 40';

const result = calculateAverage2(inputScores2);
console.log(result);
