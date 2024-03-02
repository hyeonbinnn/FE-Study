const n = prompt('문자를 입력해주세요.');
const newN = n.replace('q', 'e');

console.log(newN);

// replace() 메서드는 원본 문자열을 변경하지 않고 대체된 새로운 문자열을 반환

// 또는 함수 사용

const b = prompt('문자를 입력하세요.');

const newB = (str, searchStr, replaceStr) => {
  return str.split(searchStr).join(replaceStr);
};

console.log(newB(b, 'q', 'e'));

// 또는 정규표현식으로도 사용 가능

const m = prompt('문자를 입력해주세요.');
const newM = m.replace(/q/g, 'e');

console.log(newM);

// /q/는 문자열 내에서 'q'를 찾고, g 플래그는 전역 검색을 의미
