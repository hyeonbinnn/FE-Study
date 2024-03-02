// 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자.

const height = prompt('키를 입력해주세요.');
let sorted = '';

sorted = height
  .split(' ')
  .sort(function (a, b) {
    return a - b;
  })
  .join(' ');

if (sorted === height) {
  console.log('YES');
} else {
  console.log('NO');
}
