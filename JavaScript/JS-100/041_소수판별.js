// 소수이면 YES로, 소수가 아니면 NO로 출력

const num = prompt('숫자를 입력하세요.');

function check_prime(num) {
  // 사용자로부터 입력받은 숫자 num을 2부터 자기 자신 바로 전까지 모든 수로 나눠서 나머지를 result 변수에 저장
  for (let i = 2; i < num; i++) {
    const result = num % i;

    // 나머지가 0이면 소수가 아님
    if (result === 0) {
      console.log('NO');
      return false;
    }
  }
  // 입력받은 숫자가 1인 경우에도 소수가 아님
  if (num === 1) {
    console.log('NO');
    return;
  }
  console.log('YES');
  return true;
}

check_prime(num);
