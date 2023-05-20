// * addEventListener()
const button = document.querySelector('button');

// 첫번쨰 인자 - 이벤트 종류
// 두번쩨 인자 - 이벤트가 발생했을 때 실행시킬 이벤트 핸들러 함수를 전달

function handler(event) {
  console.log('🔥');
}

button.addEventListener('click', handler);

// * removeEventListener()
const removeButton = document.querySelector('.remove');

function removeHandler(event) {
  button.removeEventListener('click', handler);
}

removeButton.addEventListener('click', removeHandler);
