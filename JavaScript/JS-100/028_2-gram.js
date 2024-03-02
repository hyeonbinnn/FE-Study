// 문자열이 주어지면 2-gram으로 출력하는 프로그램을 작성해 주세요.

const data = prompt('문자를 입력하세요.');

for (let i = 0; i < data.length - 1; i++) {
  console.log(data[i], data[i + 1]);
}
