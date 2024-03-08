// 입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력해보자.

// ()()(()

const mathBrackets = (e) => {
  // 괄호의 개수가 같지 않으면, false
  let count = 0;

  for (let i = 0; i < e.length; i++) {
    if (e[i] === '(') {
      count++;
    }
    if (e[i] === ')') {
      count--;
    }
  }
  if (count !== 0) {
    return false;
  }

  // 괄호의 짝이 맞지 않으면, false
  let 괄호 = [];

  for (let i of e) {
    if (e[i] === '(') {
      괄호.push('('); // push 메서드 배열의 마지막에 요소 추가
    }
    if (d[i] === ')') {
      괄호.pop(')'); // pop 메서드 배열의 마지막 요소 제거
    }
  }
  // 모든 조건 통과할 시, true
  return true;
};

const n = prompt('괄호를 입력해 주세요.').split('');

if (mathBrackets(n) === true) {
  console.log('YES');
} else {
  console.log('FALSE');
}
