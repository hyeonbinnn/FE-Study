import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stock: 10,
  goods: 1,
  message: '판매중!!',
};

export const goodsSlice = createSlice({
  name: 'goods', // 이 슬라이스 이름
  initialState,
  reducers: {
    // 액션의 모습이 객체에서 함수로 변경됨
    // 액션의 선언과 리듀서에 들어있던 액션의 타입에서 해야할 일들에 대한 내용이 통합되어 작성하게 변경됨
    plus: (state) => {
      state.stock -= 1; // 기존의 state를 유지하는 코드가 필요 없어짐
      state.goods += 1;
    },
    minus: (state) => {
      state.stock += 1;
      state.goods -= 1;
    },
  },
});

export const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    sale: (state) => {
      state.message = '판매중!!';
    },
    soldOut: (state) => {
      state.message = '완판!!';
    },
  },
});

// 리듀서 함수에 대한 액션 생성자가 생성됨
export const { plus, minus } = goodsSlice.actions;
export const { sale, soldOut } = stockSlice.actions;

export const goodsReducer = goodsSlice.reducer;
export const stockReducer = stockSlice.reducer;
