// * 변수 = var
var abc = '철수';
var abc = '영희'; // 재선언 o, 재할당 o
console.log(abc);

// * 변수 = let (값을 변경할 경우)
let hi = '철수';
hi = '영희'; // 재선언 x, 재할당 o
console.log(hi);

// * 상수 = const (값을 변경하지 않을 경우)
const hello = '철수'; // 재선언 x, 재할당 x
console.log(hello);

// 우선 const로 먼저 선언 -> 값이 변경이 필요한 경우 -> let으로 변경

/**
 * * 변수 이름 규칙
 * 1. 변수나 상수 이름의 첫 번째 글자는 영어, $, _ 만 가능 (숫자로 시작 불가능)
 * 2. 첫 글자 이외에는 숫자 사용 가능
 * 3. 영어 소문자와 대문자 구별
 * 4. let, const와 같은 자바스크립트 예약어는 사용 불가
 * 5. 이름에 공백은 허용되지 않음 (Camel Case 방식 & Snake CAse 방식 사용)
 */
