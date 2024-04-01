// * this
// 함수를 호출하는 객체를 의미

// myDiner 객체가 있을 때 menu 함수는 myDiner 변수 이름이 수정될 경우나, menu 함수 자체를 다른 객체에서 사용하고 싶은 경우 불편함
const myDiner = {
  name: '김치찌개',
  menu: function () {
    console.log('오늘 저녁은 ' + myDiner);
  },
};

myDiner.menu(); // 오늘 저녁은 [object Object]

// 다른 객체에서도 함수 재사용하기
function menuGlobal2() {
  console.log('오늘 저녁은 ' + this.name);
}

const myDiner2 = {
  name: '김치찌개',
  menu: menuGlobal2,
};

myDiner2.menu(); // 오늘 저녁은 김치찌개

const yourDiner2 = {
  name: '된장찌개',
  menu: menuGlobal2,
};

yourDiner2.menu(); // 오늘 저녁은 된장찌개

// this 제어하기
// this 값은 자동으로 할당되지만, 상황에 따라 제어할 수 있음

// * call 메서드 (해당 함수가 바라볼 객체, 사용할 인수)
// this 값을 바꿀 수도 있고, 함수를 실행할 때 사용할 인수도 전달 가능

function menuGlobal3(item) {
  console.log('오늘 저녁은 ' + item + this.name);
}

const myDiner3 = {
  name: '김치찌개',
};

const yourDiner3 = {
  name: '된장찌개',
};

menuGlobal3.call(myDiner3, '묵은지'); // 오늘 저녁은 묵은지김치찌개
menuGlobal3.call(yourDiner3, '차돌박이'); // 오늘 저녁은 차돌박이된장찌개

// * apply 메서드 (해당 함수가 바라볼 객체, 사용할 인수 배열로 묶기)
// 함수를 실행할 때 인수를 배열로 묶어 한 번에 전달

function menuGlobal4(item1, item2) {
  [item1, item2].forEach(function (el) {
    console.log(this);
    console.log('오늘 저녁은 ' + el + this.name);
  }, this); // this를 두번째 인자로 넣지 않으면, 해당 this는 window 전역 객체를 가리킴, 넣으면 상위 스코프의 this를 가리킴
}

const myDiner4 = {
  name: '김치찌개',
};

const yourDiner4 = {
  name: '된장찌개',
};

menuGlobal4.apply(myDiner4, ['묵은지', '차돌박이']);
// 출력
// { name: '김치찌개' }
// 오늘 저녁은 묵은지김치찌개
// { name: '김치찌개' }
// 오늘 저녁은 차돌박이김치찌개

menuGlobal4.apply(yourDiner4, ['애호박', '누룽지']);
// 출력
// { name: '된장찌개' }
// 오늘 저녁은 애호박된장찌개
// { name: '된장찌개' }
// 오늘 저녁은 누룽지된장찌개

// * call() / apply() 차이점
// call은 함수를 실행할 때 전달할 인수를 하나씩 전달 (인수 여러개 사용)
// apply는 전달할 인수를 배열로 묶어서 한 번에 전달 (인수 하나 사용)
// 인수를 배열로 보낸다는 점 빼고 동일한 기능을 수행함

// * bind 메서드 (해당 함수가 고정시킬 객체)
// es5에서 추가
// this 값을 어디서 사용하든 호출 객체가 바뀌지 않게 고정시킴

function menuGlobal5(item) {
  console.log('오늘 저녁은 ' + item + this.name);
}

const myDiner5 = {
  name: '김치찌개',
  // menuMine: menuGlobalYou
};

const yourDiner5 = {
  name: '된장찌개',
};

// this에 할당되는 객체가 고정된 새로운 함수를 생성
const menuGlobalMe = menuGlobal5.bind(myDiner5);
const menuGlobalYou = menuGlobal5.bind(yourDiner5);

console.log(menuGlobalMe('당면')); // 오늘 저녁은 당면김치찌개
console.log(menuGlobalYou('냉이')); // 오늘 저녁은 냉이된장찌개

myDiner5.menuMine = menuGlobalYou;
myDiner5.menuMine('콩나물'); // 오늘 저녁은 콩나물된장찌개
// 이처럼 bind의 무서운 힘은 함수를 다른 객체에서 실행하더라도 해당 함수가 항상 고정된 객체를 바라보도록 함

// * 화살표 함수와 this
// 화살표 함수 this는 일반적인 this처럼 함수를 호춣한 객체를 할당하지 않고, 바로 상위 스코프의 this를 할당함

function menuGlobal6(item1, item2) {
  console.log(this);
  [item1, item2].forEach((el) => {
    console.log('오늘 저녁은 바로 ' + el + this.name);
  }); // 화살표 함수에서는 forEach 두번째 인자에 this 값을 사용하지 않아도 됨 -> 화살표 함수에서 this는 상위 스코프의 this를 가리키니까
}

const myDiner6 = {
  name: '김치찌개',
};

const yourDiner6 = {
  name: '된장찌개',
};

menuGlobal6.apply(myDiner6, ['묵은지', '차돌박이']);
// 출력
// { name: '김치찌개' }
// 오늘 저녁은 바로 묵은지김치찌개
// 오늘 저녁은 바로 차돌박이김치찌개

menuGlobal6.apply(yourDiner6, ['애호박', '누룽지']);
// 출력
// { name: '된장찌개' }
// 오늘 저녁은 바로 애호박된장찌개
// 오늘 저녁은 바로 누룽지된장찌개
