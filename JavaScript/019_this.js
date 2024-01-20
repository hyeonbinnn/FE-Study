// 전역 컨텍스트에서의 this
function globalFun() {
  return this;
}

globalFun(); // window 출력

// 화살표 함수에서의 this
const arrowFun1 = () => {
  console.log(this);
};

arrowFun1(); // window 출력

const obj = {
  arrowFun1: function () {
    const arrowFun2 = () => {
      console.dir(this);
    };
    arrowFun2();
  },
};

obj.arrowFun1(); // obj 출력

// 객체 메서드에서의 this
const obj2 = {
  aaa: function () {
    console.log('aaa this:', this);
  },
  bbb() {
    console.log('bbb this:', this);
  },
  ccc: () => {
    console.log('ccc this:', this);
  },
};

obj2.aaa(); // obj
obj2.bbb(); // obj
obj2.ccc(); // window

// 내부 함수에서의 this
const obj3 = {
  aaa: function () {
    function aaaInner() {
      console.log('aaaInner this:', this);
    }

    aaaInner();
  },

  bbb: function () {
    const that = this;
    function bbbInner() {
      console.log('bbbInner this:', that);
    }

    bbbInner();
  },

  ccc: function () {
    const cccInner = () => {
      console.log('cccInner this:', this);
    };

    cccInner();
  },
};

obj3.aaa(); // window
obj3.bbb(); // obj
obj3.ccc(); // obj

// 콜백 함수에서의 this
const obj4 = {
  aaa: function () {
    setTimeout(() => {
      console.log('aaa setTimeout this:', this);
    }, 1000);
  },

  bbb: function () {
    setTimeout(function () {
      console.log('bbb setTimeout this:', this);
    }, 1000);
  },
};

obj4.aaa(); // aaa setTimeout this: aaa
obj4.bbb(); // bbb setTimeout this: Window

// 생성자 함수에서의 this
function Kim(name) {
  this.name = name;
}

const kim = new Kim('park');
console.log(kim); // Kim { name: 'park' }

function Example(name) {
  this.name = name;
}

const instance = new Example('John');
console.log(instance.name); // John

// apply / call / bind에서의 this
function example(num1, num2) {
  console.log(this.name, num1 + num2);
}
const person = {
  name: 'Kim',
};
example.call(person, 1, 2); // Kim 3
example.apply(person, [1, 6]); // Kim 7

const newExample = example.bind(person);
newExample(10, 2); // kim 12

// 이벤트 핸들러 안에서의 this
const btn = document.querySelector('#btn');

btn.addEventListener('click', function () {
  console.log(this); // this는 클릭된 button을 가리킴
});
