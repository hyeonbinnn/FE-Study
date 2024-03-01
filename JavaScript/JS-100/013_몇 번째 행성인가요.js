const findPlanet = (n) => {
  const planets = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];

  if (n >= 1 && n <= 8) {
    return planets[n - 1];
  } else {
    return '해당하는 행성이 없습니다.';
  }
};

const n = 3;
console.log(findPlanet(n));
// 출력: 수성 (n이 1일 때)
// 출력: 지구 (n이 3일 때)

// 또는

const planets8 = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];

const nn = prompt('몇 번째 행성인가요?');
console.log(planets8[nn - 1]);
// 입력 : 1
// 출력 : 수성
