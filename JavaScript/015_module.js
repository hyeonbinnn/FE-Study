// 모듈은 코드를 모아둔 파일을 의미
// 재사용성, 유지보수성

// 외부 모듈 가져오기
// * 이름이 정해진 내보내기 방식
// 가져올 때는 중괄호 안에 사용할 모듈의 정의된 이름을 나열하면 됨
import { greeting } from './015_module_test.js';
greeting();

// * 기본 내보내기 방식
// 가져올 때는 중괄호 생략 가능하고, 모듈이 정의된 이름이 아닌 사용자가 원하는 이름으로 사용 가능
import greeting from './015_module_test.js';
greeting();

import Hello from './015_module_test.js';
Hello();
