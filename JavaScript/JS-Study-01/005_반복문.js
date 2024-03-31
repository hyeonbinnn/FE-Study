// * for
/**
 * let i = 0;
 * 시작값을 의미, 반복문에 진입할 때 딱 한번 실행
 * i < 5;
 * 조건식을 의미, 코드를 반복할 때마다 확인 후, 조건식의 i값이 부합하는지 확인
 * 참이면 반복을 수행, 거짓이면 반복문 탈출
 * i++;
 * (증감값을 의미, 매회 반복을 마친 후 실행)
 */
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let i = 0;
for (; i < 5; ) {
  console.log(i++);
}

// * break
// 반복문에서 조건과 무관하게 사용자가 원할 때 반복문 빠져나오기
for (let i = 0; i < 10; i++) {
  if (i === 7) {
    break; // 6
  }
  console.log(i);
}

// * continue
for (let i = 0; i < 10; i++) {
  if (i === 7) {
    continue; // 7만 건너뛰고 출력
  }
  console.log(i);
}

// * for of
// 반복이 가능한 객체 즉, 배열이나 문자열 등에서 사용할 수 있는 반복문의 종류
// 주어진 객체를 차례대로 순회하면서 코드를 실행
// 조건을 만족할 때만 반복하는 게 아니라 배열의 요소들을 처음부터 끝까지 순회하면서 내부에 지정된 코드를 실행
const arr = [1, 2, 3];

for (const i of arr) {
  console.log(i); // 1 2 3
}

// * while
// 괄호 안에 지정된 조건이 (참)만족할 때 동안 코드 내부에서 계속 반복
let z = 0;
while (z < 10) {
  console.log(z++);
}

// * do while
// 조건문을 반복문의 시작 위치가 아니라 끝 위치에서 판별
let q = 0;
do {
  console.log(q++);
} while (q < 10);
