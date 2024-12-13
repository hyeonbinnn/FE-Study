let a = [10, 20, 30, 1, 2, 3, 5, 9, 11];
a.sort(); // 사전식정렬
console.log(a[0]);
console.log(a[a.length - 1]); // 9

console.log(Math.max.apply(null, a));
console.log(Math.min.apply(null, a));

// 최댓값
let m = a[0];
for (aa of a) {
  if (aa > m) {
    m = aa;
  }
}

console.log(m); // 30

// 최솟값
let mm = a[0];
for (aa of a) {
  if (aa < mm) {
    mm = aa;
  }
}

console.log(mm); //1

// * reducer 이용해서 최솟값 최댓값 구하기
const reducerMax = (acc, cur) => (acc > cur ? acc : cur);
const reducerMin = (acc, cur) => (acc < cur ? acc : cur);
console.log(a.reduce(reducerMax));
console.log(a.reduce(reducerMin));
