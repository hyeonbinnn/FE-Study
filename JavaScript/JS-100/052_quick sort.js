// 다음 빈 칸을 채워 퀵 정렬을 완성하시오.
// 퀵 정렬은 배열을 분할하고 정렬하는 데 사용되는 효율적인 정렬 알고리즘 중 하나
// 피벗(pivot)을 기준으로 배열을 분할하고, 분할된 부분 배열에 대해 재귀적으로 정렬을 수행

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

const array = prompt('배열을 입력하세요')
  .split(' ')
  .map((n) => parseInt(n, 10));

console.log(quickSort(array));

// 5(pivot) 10 3 2 1

// left [] = 3, 2, 1
// right [] = 10
// left 배열은 재귀호출을 통해 계속 피벗을 기준으로 왼쪽, 오른쪽 분할
// 마지막에 각 하위 배열들을 합치면서 최종적으로 전체 배열이 정렬
