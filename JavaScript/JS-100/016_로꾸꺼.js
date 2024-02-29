const n = prompt('입력하세요.');
const reverseStr = n.split('').reverse().join('');

console.log(reverseStr);

// split() 메서드는 문자열을 배열로 만들어 반환함
// reverse() 메서드는 배열의 순서를 반전시킴
// join() 메서드는 원소를 모두 붙여 문자열로 반환함
