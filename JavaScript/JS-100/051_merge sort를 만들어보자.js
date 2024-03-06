// 병합정렬(merge sort)은 대표적인 정렬 알고리즘 중 하나로 다음과 같이 동작합니다.
//  1. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는
// 2. 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.
// 3. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.
// 4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];

  // 왼쪽과 오른쪽 배열이 모두 비어있지 않은 동안
  // 왼쪽 배열의 첫 번째 요소가 오른쪽 배열의 첫 번째 요소보다 작으면
  // 왼쪽 배열의 첫 번째 요소를 결과 배열에 추가하고 삭제
  // 오른쪽 배열의 첫 번째 요소를 결과 배열에 추가하고 삭제
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  // 왼쪽 배열에 남은 요소들을 결과 배열에 추가
  while (left.length) {
    result.push(left.shift());
  }
  // 오른쪽 배열에 남은 요소들을 결과 배열에 추가
  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

const array = prompt('배열을 입력하세요')
  .split(' ')
  .map((n) => parseInt(n, 10));

console.log(mergeSort(array));
