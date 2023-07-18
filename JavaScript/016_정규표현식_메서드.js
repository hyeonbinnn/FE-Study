// 정규표현식을 담은 변수
const regex = /seven/; // seven 이라는 단어가 있는지 필터링

const txt = 'one two three four five six seven eight nine ten';

// "문자열"이 "정규표현식"과 매칭되면 true, 아니면 false반환
const isMatch = regex.test(txt);
console.log(isMatch); // true

// "문자열"에서 "정규표현식"에 매칭되는 항목들을 배열로 반환
const isMatch2 = txt.match(regex);
console.log(isMatch2); // ['seven']

// "문자열"을 "정규표현식"에 매칭되는 항목으로 쪼개어 배열로 반환
const isMatch3 = txt.split(regex);
console.log(isMatch3); // [ 'one two three four five six ', ' eight nine ten' ]

// "정규표현식"에 매칭되는 항목을 "대체문자열"로 변환
const isMatch4 = txt.replace(regex, 'heaven');
console.log(isMatch4); // 'one two three four five six heaven eight nine ten'

// match 메서드와 유사 (단, 무조건 첫번째 매칭 결과만 반환)
const isMatch5 = regex.exec(txt);
console.log(isMatch5); // ['seven']
