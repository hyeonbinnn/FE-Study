// * g : 전역 검색
// `n`이 두 개 포함된 문자열
const str = 'one two three four five six seven eight nine ten';

// `g` 플래그 없이는 최초에 발견된 문자만 반환
const isMatch = str.match(/n/); // [ 'n', index: 1, input: 'one two three four five six seven eight nine ten', groups: undefined ]
console.log(isMatch);

// `g` 플래그가 있으면 모든 결과가 배열로 반환
const isFlag = str.match(/n/g); // [ 'n', 'n', 'n', 'n', 'n' ]
console.log(isFlag);

// * m : 줄바꿈 검색
// 여러 줄의 문자열에서 필터링 해야 될때 사용
// 줄바꿈이 포함된 3줄 문자열
const str2 = 'one two three~~\nfour five six??\nfour seven eight nine ten!!';
console.log(str2);
/* 
one two three~~
four five six??
four seven eight nine ten!! 
*/

// one 단어로 시작하는지 검사 (^ 문자는 문장 시작점을 의미)
const isM = str2.match(/^one/);
// → 첫번째 줄은 잘 찾음
console.log(isM); // ["one"]

// Power 단어로 시작하는지 검사
const isM2 = str2.match(/^four/);
// → 그러나 그 다음 줄은 검색되지 않음
console.log(isM2); // null

// 따라서 m 플래그를 통해 개행되는 다음 줄도 검색되게 설정
const isM3 = str2.match(/^four/m);
console.log(isM3); // ['four']

// 세번째 줄도 검색되게 하고싶으면 g 플래그와 혼합 사용
const isM4 = str2.match(/^four/gm);
console.log(isM4); // [ 'four', 'four' ]

// * i : 대소문자 구분 없음
// 정규식은 기본적으로 대소문자를 구분
// 대신 i 플래그를 통해 대소문자 구분 하지 않을 수 있음
const str3 = 'abcABCabcABCdefgDEFGdefgDEFG';

// 대소문자 a 검색
const isI = str3.match(/g/gi);
console.log(isI); // [ 'g', 'G', 'g', 'G' ]
