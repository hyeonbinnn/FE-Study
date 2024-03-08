// 입력1
// 1 2 3 4 5
// 출력1
// YES

// 입력2
// 1 4 2 6 3
// 출력2
// NO

const sol = (l) => {
  l.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < l.length - 1; i++) {
    // 현재 요소 + 1과 현재 요소 바로 다음 요소 값 비교
    if (l[i] + 1 !== l[i + 1]) {
      return 'NO';
    }
  }
  return 'YES';
};

const n = prompt('입력해주세요.')
  .split(' ')
  .map((n) => parseInt(n, 10));

console.log(sol(n));
