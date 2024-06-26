// * 리플로우
// 생성된 DOM 노드의 레이아웃 변경 시 영향을 받는 모든 노드(부모, 자식)의 수치를 다시 계산해 레이아웃 트리(렌더 트리)를 재생성하는 작업
// 리플로우 발생하게 하는 속성
// width, height, padding, margin, float, position 등등...

// * 리페인트
// 리플로우 과정이 끝나고 재생성된 레이아웃 트리를 다시 레이어에 그리는 작업
// 리페인트 발생하게 하는 속성
// color, border-radius, background, box-shadow 등등...

// * 리플로우와 리페인트는 왜 렌더링 속도에 영향을 미칠까?
// 렌더링 과정은 순차적으로 진행되기에 전 단계의 데이터가 필요함
// 그래서 전 단계에 변화가 일어나면 다음 단계에 모두 영향을 미침

// * 성능 저하 막는 방법
// 1. CSS Transform 속성 사용
// transform을 사용해 만드는 애니메이션은 cpu 대신 gpu를 사용해 화면 렌더링을 처리
// CPU는 엄청나게 강력한 팔방미인이지만, 프로그램을 처리하느라 개바쁨
// GPU는 여러개의 코어가 간단한 작업을 동시에 협업하는데 특화되어 있어서 빠르게 처리 가능

// 2. JS에서는 requestAnimationFrame 함수 사용
// 자바스크립트를 통해 일어나는 애니메이션 정보를 브라우저에 매 프레임마다 미리 알려줌
