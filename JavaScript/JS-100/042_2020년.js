// 2020년 1월 1일은 수요일
// 2020년 a월 b일은 무슨 요일?
// a, b를 입력받아 무슨 요일인지 리턴하는 함수 solution을 완성하시오.
// 예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환

const m = prompt('월을 입력하세요.');
const d = prompt('일을 입력하세요.');

const solution = (a, b) => {
  const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const x = new Date('2020-' + a + '-' + b);
  return day[x.getDay()];
};

console.log(solution(m, d));
