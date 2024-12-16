// ! 오래간만에 개념 체크

// * 비동기
const blocking = () => {
  console.log('첫번째 작업');
  console.log('두번째 작업');
  console.log('세번쨰 작업');
};
blocking();

const nonBlocking = () => {
  console.log('첫번쨰 작업');

  setTimeout(() => {
    console.log('두번째 작업');
  }, 1000);

  console.log('세번째 작업');
};
nonBlocking();

// * 콜백
const taskSyncFunc = (callback) => {
  console.log('첫번쨰 작업');
  console.log('두번째 작업');
  callback();
};

taskSyncFunc(() => {
  console.log('콜백 함수 실행');
});

console.log('실행완료');

const taskAsyncFunc = (callback) => {
  console.log('시작');
  setTimeout(() => {
    console.log('첫번째 작업');
    console.log('두번째 작업');
    callback();
  }, 2000);
  console.log('끝');
};

taskAsyncFunc(() => {
  console.log('콜백 함수 실행');
});

console.log('실행 완료~');

// * 콜백지옥
// const getUser = (userId, callback) => {
//   setTimeout(() => {
//     const user = { id: userId, name: 'JEONG' };
//     callback(user);
//   }, 1000);
// };

// const getPosts = (userId, callback) => {
//   setTimeout(() => {
//     const posts = [
//       {
//         id: 1,
//         title: 'Post1',
//       },
//       {
//         id: 2,
//         title: 'Post2',
//       },
//     ];
//     callback(posts);
//   }, 1000);
// };

// const getComments = (postId, callback) => {
//   setTimeout(() => {
//     const comments = [
//       { id: 1, text: 'Comment1' },
//       { id: 2, text: 'Comment2' },
//       { id: 3, text: 'Comment3' },
//     ];
//     callback(comments);
//   }, 1000);
// };

// getUser(1, (user) => {
//   console.log('user', user);
//   getPosts(user.id, (posts) => {
//     console.log('posts', posts);
//     getComments(posts[0].id, (comments) => {
//       console.log('comments', comments);
//     });
//   });
// });

// Promise 체이닝으로 콜백 지옥 해결
const getUser = (userId, callback) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      try {
        const user = { id: userId, name: 'JEONG' };
        // callback(user);
        res(user);
      } catch (error) {
        rej(error);
      }
    }, 1000);
  });
};

const getPosts = (userId, callback) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      try {
        const posts = [
          {
            id: 1,
            title: 'Post1',
          },
          {
            id: 2,
            title: 'Post2',
          },
        ];
        // callback(posts);
        res(posts);
      } catch (error) {
        rej(error);
      }
    }, 1000);
  });
};

const getComments = (postId, callback) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      try {
        const comments = [
          { id: 1, text: 'Comment1' },
          { id: 2, text: 'Comment2' },
          { id: 3, text: 'Comment3' },
        ];
        // callback(comments);
        res(comments);
      } catch (error) {
        rej(error);
      }
    }, 1000);
  });
};

// getUser(1, (user) => {
//   console.log('user', user);
//   getPosts(user.id, (posts) => {
//     console.log('posts', posts);
//     getComments(posts[0].id, (comments) => {
//       console.log('comments', comments);
//     });
//   });
// });

getUser(1)
  .then((user) => {
    console.log('user', user);
    return getPosts(user.id);
  })
  .then((posts) => {
    console.log('posts', posts);
    return getComments(posts[0].id);
  })
  .then((comments) => {
    console.log('comments', comments);
  })
  .catch((error) => console.error('error', error))
  .finally(() => console.log('finally~~'));

// * Promise (약속~)
// 비동기 작업을 처리하는데 사용되는 객체 (생성과 동시에 비동기 작업 처리)
// new 키워드
// Promise 객체로 작업을 처리하고 결과를 관리
// 대기(pending) -> 이행(fulfilled) -> 거부(rejected)
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const text = prompt('입력해줘');
//     if (text === '안녕') {
//       resolve('🖐🏻');
//     } else {
//       reject('❌');
//     }
//   }, 2000);
// });

// myPromise
//   .then((result) => {
//     console.log('result', result);
//     return `이모지는 : ${result}`;
//   })
//   .then((result) => {
//     console.log('result', result);
//   })
//   .catch((error) => {
//     console.error('error', error);
//   })
//   .finally(() => {
//     console.log('마지막~');
//   });

// * async-await
// async로 비동기 함수 정의
// await로 비동기 작업 기다리기
const getUsers = (userId) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      try {
        const user = userId === 1 ? { id: userId, name: 'JEONG' } : null;
        res(user);
      } catch (error) {
        rej(error);
      }
    }, 1000);
  });
};

// const runPromise = () => {
//   getUsers(0).then((user) => {
//     if (user) {
//       console.log('user', user);
//     } else {
//       console.log('유저 없음');
//     }
//   });
// };
// runPromise();

const runAsyncAwait = async () => {
  try {
    const user = await getUsers(1);
    if (user) {
      console.log('user', user);
    } else {
      console.log('유저 없음');
    }
  } catch (error) {
    console.log('error', error);
  }
};
console.log('시작');
runAsyncAwait();
console.log('끝');
