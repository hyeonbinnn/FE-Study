// 문자열 속에 숨어있는 문자를 찾기

const str1 = prompt('문자열을 입력해주세요.');
const str2 = prompt('문자를 입력해주세요.');

console.log(str1.indexOf(str2));

// indexOf 메서드는 문자열을 처음부터 순회하며 특정 요소의 첫 번째 인덱스를 검색
// 주어진 값과 일치하는 값 혹은 요소의 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환
