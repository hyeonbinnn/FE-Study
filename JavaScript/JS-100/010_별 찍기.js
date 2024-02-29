// 숫자를 입력하면 크리스마스 트리를 만드는 프로그램을 작성하시오.

const n = prompt('숫자를 입력하세요!');
let tree = '';

for (let i = 1; i <= n; i++) {
  let star = '';

  // 공백 추가
  for (let j = 1; j <= n - i; j++) {
    star += ' ';
  }
  // 별 추가
  for (let k = 1; k <= 2 * i - 1; k++) {
    star += '*';
  }
  // 트리에 한 줄 추가
  tree += star + '\n';
}

console.log(tree);

// 출력
//     *
//    ***
//   *****
//  *******
// *********

function printChristmasTree(height) {
  // 트리의 높이만큼 반복
  for (let i = 1; i <= height; i++) {
    // 공백을 추가하여 트리를 오른쪽 정렬
    let spaces = ' '.repeat(height - i);

    // 별 모양 만들기 1, 3, 5 ...
    let stars = '*'.repeat(2 * i - 1);

    // 공백과 별을 합쳐서 한 줄 만들기
    let line = spaces + stars;

    console.log(line);
  }
}

// 트리의 높이를 지정
let treeHeight = 5;

// 크리스마스 트리를 출력
printChristmasTree(treeHeight);

// 출력
//     *
//    ***
//   *****
//  *******
// *********
