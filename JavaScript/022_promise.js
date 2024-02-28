// JS는 비동기 = 코드의 흐름을 기다리지 않고 각자 실행 후 바로 알려줌
// 그래서 callback 사용 = 함수 실행 후 다음 함수를 실행시켜 줌, 남발해서 사용하면 안 됨(callback hell)
// 그래서 promise 문법 등장

// promise - 하나의 함수를 실행하고 연속적으로 .then을 통해 일련의 흐름을 제어하는 문법, 에러를 핸들링 할 수 있음
// 1) pending 대기상태
// 2) fulfiled 이행상태
// 3) rejected 실패상태

function sayHello() {
  return new Promise((resolve, reject) => {
    // reject(new Error());
    resolve('hello!!!');
    // const hello = 'Hello Hello';
    // resolve(hello);
  });
}

sayHello()
  .then((resolveData) => {
    console.log(resolveData);
    return resolveData;
  })
  // 연속적으로 .then을 사용할 때, 앞 선 .then의 리턴값으로 받아옴
  .then((resolveData) => {
    console.log(resolveData);
    return resolveData;
  })
  .then((resolveData) => {
    console.log(resolveData);
  })
  // Error가 생겼을 때 .catch 문법
  .catch((error) => {
    console.log(error);
  });

// .then을 사용해 콜백이 많이 만들어지는 걸 방지했지만, .then도 많이 사용하면 복잡해질 수 있는 문제점이 있음
// 이를 해결하기 위해 async, await 사용
