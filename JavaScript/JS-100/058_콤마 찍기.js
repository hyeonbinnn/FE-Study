// 숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.

// 내장함수 이용
const n = prompt('숫자를 입력해주세요.');
const newN = parseInt(n, 10);

console.log(newN.toLocaleString());

// 재귀함수 이용
function comma(s) {
  if (s.length <= 3) {
    return s;
  } else {
    // 문자열 s의 마지막 세 자리를 제외한 부분을 추출
    return comma(s.slice(0, s.length - 3)) + ',' + s.slice(s.length - 3);
  }
}

const nn = prompt('숫자를 입력해주세요.');
console.log(comma(nn));
