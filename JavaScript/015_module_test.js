// * 모듈 생성 및 내보내기
// 내보낼 변수나 함수 앞에 export를 붙이면 모듈로서 내보낼 수 있음

// * Named Exports - 이름이 정해진 내보내기 방식
// 하나의 모듈에서 여러개의 함수나 객체 등 변수를 내보낼 수 있고,
// 가져올 때는 중괄호 안에 사용할 모듈의 정의된 이름을 나열하면 됨

export function greeting() {
  console.log('Hello');
}

// * Default Exports - 기본 내보내기 방식
// 모듈에서 하나의 함수나 객체들을 기본으로 내보낼 때 사용하고,
// 가져올 때는 중괄호 생략 가능하고, 모듈이 정의된 이름이 아닌 사용자가 원하는 이름으로 사용 가능

export default function greeting() {
  console.log('Hello');
}

// * 선언부와 export 분리하기
// function greeting() {
//   console.log('Hello');
// }

// export default greeting; // 기본 내보내기 방식 분리
// export {greeting;} // 이름이 정해진 내보내기 방식 분리
