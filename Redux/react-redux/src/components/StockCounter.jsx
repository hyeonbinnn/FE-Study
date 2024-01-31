import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sale, soldOut } from './../redux/actions/actions';

const StockCounter = () => {
  // useSelector : store의 상태 조회 Hook
  const { stock } = useSelector((state) => ({
    stock: state.goodsReducer.stock,
  }));

  // useSelector : store의 상태 조회 Hook
  const { message } = useSelector((state) => ({
    message: state.stockReducer.message,
  }));

  // useDispatch : store의 dispatch를 함수 내부에서 사용할 수 있는 Hook
  const dispatch = useDispatch();

  useEffect(() => {
    if (stock <= 0) {
      dispatch(soldOut());
    } else {
      dispatch(sale());
    }
  }, [stock]);

  return (
    <>
      <strong>{message}</strong>
    </>
  );
};

export default StockCounter;
