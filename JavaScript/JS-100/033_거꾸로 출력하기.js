// 한 줄에 여러개의 숫자가 입력되면 역순으로 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

const data = prompt('숫자를 입력하세요.').split('');

console.log(data.reverse().join(' '));

// 또는

function reversePrint(input) {
  // 입력된 숫자들을 공백을 기준으로 배열로 분할
  const numbers = input.split(' ');

  // 역순으로 숫자들을 출력
  console.log(numbers.reverse().join(' '));
}

// 테스트 입력
reversePrint('1 2 3 4 5');
reversePrint('2 4 6 7 8');
