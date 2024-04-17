"use strict";
let 제목 = document.querySelector('#title');
if (제목 instanceof Element) {
    제목.innerHTML = '반가워요';
}
// if (제목?.innerHTML != undefined) {
//   제목.innerHTML = '반가워요';
// }
// if (제목 !== null) {
//   제목.innerHTML = '반가워요';
// }
// let 제목 = document.querySelector('#title') as Element;
// 제목.innerHTML = '반가워요';
let 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://kakao.com';
}
document.addEventListener('click', function () {
    let 버튼 = document.querySelector('#button');
    if (버튼 instanceof HTMLButtonElement) {
        버튼.style.backgroundColor = 'blue';
        버튼.style.color = 'white';
        버튼.innerHTML = '파란버튼';
    }
});
//# sourceMappingURL=index.js.map