console.log(parseInt('100', 10));
console.log(parseInt('100', 16));
console.log(parseInt('100', 8));
console.log(parseInt('100', 2));
console.log(parseFloat('100.000.123.abc!!!!', 10));
console.log(parseFloat('100,1,0,1,1,1,.000.123.abc!!!!', 10));

let arr = [10, 2, 3, 22, 33, 100, 11];
let arrTwo = [10, 2, 3, 22, 33, 100, 11];
console.log(arr.concat(arrTwo));

// stack - LIFO
console.log(arr);
console.log(arr.pop());
console.log(arr);
console.log(arr.push(10000));
console.log(arr);

// queue
console.log(arr.push(10000));
console.log(arr);
console.log(arr.shift()); // 맨앞 삭제
console.log(arr);
console.log(arr.unshift(30000)); // 맨앞추가
console.log(arr);

console.log(arr.length);
console.log(arrTwo.fill(100));
console.log(arrTwo);
console.log(arr.filter((x) => x > 30));

let arrThree = [1, 2, 3, [1, 2, 3, [10, 20]]];
console.log(arrThree);
console.log(arrThree.flat());
console.log(arrThree.flat(2));
console.log(arr.includes(100));
console.log(arr.join('!'));

function jj(x) {
  return x ** 2;
}
console.log(arr.map(jj));

function jjj(x) {
  return parseInt(x);
}
console.log(['1', '2', '3'].map(jjj));
console.log(['1', '2', '3'].map((x) => parseInt(x)));
console.log(arr.sort()); // 사전식정렬
console.log(arr.reverse()); // 역순
console.log(arr.splice(2, 1, 'jj')); //요소를 삭제하거나 교체
console.log(arr); //요소를 삭제하거나 교체
console.log(arr.slice(2, 5)); // 요소를 인덱스 기준으로 잘라냄

let arryy = [1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 5, 5, 5, 4, 4, 4, 5, 5, 6, 7];
let ss = new Set(arryy);
console.log(ss);
console.log(ss.size); // size 사용
console.log(ss.length); //undefined
console.log(ss.has(1));

let sss = new Map();
sss.set('일', 'one');
sss.set('둘', 2);
sss.set('셋', 3);
sss.set('넷', 4);
console.log(sss);
console.log(sss.has('둘'));
console.log();

for (ssss of sss) {
  console.log(ssss);
}

let str = 'abc abc de de abcde defg';
console.log(str);
console.log(str.concat('hi'));
console.log(str);
console.log(str.includes('fgh'));
console.log(str.split(' '));
console.log(str.replace(/abc/g, '!'));
console.log(str.replace(/ /g, '-'));
console.log(str.slice(2, 4));
console.log(str.indexOf('abcde'));
console.log(str.length);

let re = /abc/gi;
console.log(str.match(re));
