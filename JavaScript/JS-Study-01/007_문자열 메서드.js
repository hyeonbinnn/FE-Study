// * 문자열 대소문자 변환
// # toUpperCase(), toLowerCase()

const str = 'Hello World!';

console.log(str.toUpperCase()); // 대문자
console.log(str.toLowerCase()); // 소문자

// * 문자열 공백 제거
// # trim(), trimStart(), trimEnd()

const str2 = '        Hello World!    ';

console.log(str2.trim()); // 전체 공백 제거
console.log(str2.trimStart()); // 앞쪽 공백 제거
console.log(str2.trimEnd()); // 뒤쪽 공백 제거

// * 기존 문자열을 가공해서 새로운 문자열을 반환 (원복은 변하지 않음)
// # repeat(), padSTart(), padEnd()

const str3 = 'Hello World!';

console.log(str3.repeat(3)); // 원본 str3가 변하지 않고 출력
console.log(str3.padStart(20, '_')); // (최종적으로 만들 문자열의 길이, 앞쪽에 추가할 문자)
console.log(str3.padEnd(20, '_')); // (최종적으로 만들 문자열의 길이, 뒤쪽에 추가할 문자)

// * 문자열에서 특정 부분을 검색
// # indexOf(), includes(), startsWith(), endsWith()

const str4 = '어서오시오. 내 이름은 철수라오!';

console.log(str4.indexOf('철수')); // 13, 주어진 키워드 값을 문자열에서 검색해서 일치하는 첫번째 인덱스를 반환, 찾지 못하면 -1 반환
console.log(str4.includes('철수')); // true, 주어진 키워드 값을 문자열에서 검색해서 일치하는 값을 찾으면 true, 없으면 false 출력
console.log(str4.startsWith('어서')); // true, 문자열이 주어진 문자열로 시작하거나 끝나는지의 여부를 검색
console.log(str4.endsWith('철수')); // false

// * 문자열을 다양한 방법으로 수정
// # replace(), replaceAll(), substring()

const str5 = '어서오시오. 내 이름은 철수라오! 철수! 철수! 철수!';

console.log(str5.replace('철수', '영희')); // (교체할 문자열, 새로운 문자열), 주어진 패턴과 일치하는 첫번째 부분을 주어진 문자열로 교체해서 새로운 문자열을 생성, 일치하는 문자열이 여러개여도 첫번째 값만 교체
console.log(str5.replaceAll('철수', '영희')); // 일치하는 문자열 전부 교체
console.log(str5.substring(0, 5)); // 주어진 시작 인덱스 0부터 종료 인텍스 5의 이전 인덱스 4까지 새로운 부분 문자열로 반환

// # split(), slice()

const str6 = '월, 화, 수, 목, 금, 토, 일';

console.log(str6.split(',')); // 문자열을 주어진 구분자를 기준으로 잘라서 그 결과를 배열로 반환
console.log(str6.slice(3)); // (시작 위치를 의미하는 필수 인자, 종료 위치를 의미하는 선택적 인자), 주어진 인자에 따라 문자열의 일부를 추출해서 새로운 문자열로 반환
console.log(str6.slice(3, 8)); // 종료 인자의 이전 7번 인덱스까지 반환
console.log(str6.slice(-3)); // 반대로 반환
