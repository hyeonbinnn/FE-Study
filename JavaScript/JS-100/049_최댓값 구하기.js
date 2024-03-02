// 순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다.
// 주어진 숫자들 중 최댓값을 반환하라.

// 입력 : 10 9 8 7 6 5 4 3 2 1
// 출력 : 10

const num = prompt('숫자를 공백으로 구분해 입력해 주세요.')
  .split(' ')
  .map((n) => {
    return parseInt(n, 10);
  });

num.sort((a, b) => {
  return b - a;
});

console.log(num[0]);

// 또는 Math.max() 메서드로 구하기

const num2 = prompt('숫자를 공백으로 구분해 입력해 주세요.')
  .split(' ')
  .map((n2) => {
    return parseInt(n2, 10);
  });

const result = Math.max(...num2);

console.log(result);
