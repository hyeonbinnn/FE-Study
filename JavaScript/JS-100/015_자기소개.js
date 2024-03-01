const name = prompt('자기소개를 해주세요.');
console.log(`안녕하세요, 저는 ${name}입니다.`);

// es6부터는 backtick 문자열(``) 안에서 $와 중괄호로 표현식 즉, 템플릿 리터럴(Template literals) 사용 가능

// 또는

const introduce = () => {
  return `안녕하세요, 저는 ${namee}입니다.`;
};

const namee = '김다정';
console.log(introduce(namee));
