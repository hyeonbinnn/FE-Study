// async, await

function sayHello() {
  return new Promise((resolve, reject) => {
    resolve('hello!!!');
  });
}

// promise를 바로 쓸 수 없기에 async와 await를 추가
// promise 자체가 비동기로 움직이기 때문에 추가하지 않으면 밑에 있는 코드들이 바로 실행될 수 있음
// await을 쓰면 sayHello()가 실행된 후 밑에 있는 코드들을 실행시키는 것
async function test() {
  const hello1 = await sayHello();
  console.log(hello1);
}

test(); // hello!!!
