// 데이터
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

// concat() 메서드는 매개변수로 전달된 문자열을 메서드를 호출한 문자열에 붙여 새로운 문자열로 반환합
var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);

console.log(result);
// 출력: 2019/04/26 11:34:27
