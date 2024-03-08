// 다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

const nationWith = {
  korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

// w 변수에 한국의 면적 저장
const w = nationWith['korea'];
// nationWith 객체에서 한국 정보 삭제
delete nationWith['korea'];

// Object.entries() : 객체의 각 속성에 대한 [키, 값] 쌍의 배열을 반환
// Object.values() : 객체의 속성 값들을 배열로 반환
//  nationWith 객체를 배열 형태로 변환해 entry에는 국가와 면적의 쌍을 value에는 면적만 저장
const entry = Object.entries(nationWith);
const values = Object.values(nationWith);

// gap에 면적의 최댓값 저장
let gap = Math.max.apply(null, values);
let item = [];

// entry 배열을 순회하면서 각 국가의 면적과 한국의 면적과의 차이를 계산
for (let i in entry) {
  // 현재 국가의 면적과 한국의 면적과이 차이가 gap 보다 작으면,
  // 이 값을 gap에 저장하고, 해당 국가 정보를 item 배열에 저장
  if (gap > Math.abs(entry[i][1] - w)) {
    gap = Math.abs(entry[i][1] - w);
    item = entry[i];
  }
}

console.log(item[0], item[1] - w);
// 출력
// England 22023
