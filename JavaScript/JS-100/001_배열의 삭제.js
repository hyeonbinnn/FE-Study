var nums = [100, 200, 300, 400, 500];

// 배열의 마지막 요소를 삭제
nums.pop();
nums.pop();
console.log(nums);
// 출력: [ 100, 200, 300 ]

// 배열의 첫번쨰 요소를 삭제
nums.shift();
nums.shift();
console.log(nums);
// 출력: [ 300, 400, 500 ]

// 배열의 요소 삭제 (첫번째 인자: 제거할 배열요소, 두번째 인자: 제거할 배열요소의 개수, 세번째 인자: 추가 요소)
nums.splice(3, 2);
console.log(nums);
// 출력: [ 100, 200, 300 ]

// delete 연산자를 사용하여 특정 배열 요소를 삭제
delete nums[3];
console.log(nums);
// 출력: [ 100, 200, 300, <1 empty item>, 500 ]
