import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { plusNumber, minusNumber } from './../redux/actions/actions';

const GoodsCounter = () => {
  // useSelector : store의 상태 조회 Hook
  const { stock, goods } = useSelector((state) => ({
    stock: state.goodsReducer.stock,
    goods: state.goodsReducer.goods,
  }));
  console.log(stock, goods);

  // useDispatch : store의 dispatch를 함수 내부에서 사용할 수 있는 Hook
  const dispatch = useDispatch();

  const onPlusNumber = () => {
    if (stock > 0) {
      dispatch(plusNumber());
    }
  };

  const onMinusNumber = () => {
    if (goods > 0) {
      dispatch(minusNumber());
    }
  };

  return (
    <Container>
      <h2>판매왕 로봇</h2>
      <span>
        <strong>50,000</strong>원
      </span>
      <div>
        <Button type="button" onClick={onMinusNumber} disabled={goods <= 0}>
          -
        </Button>
        <span>{goods}</span>
        <Button type="button" onClick={onPlusNumber} disabled={stock <= 0}>
          +
        </Button>
      </div>
      <div>
        총 수량 <strong>{goods}</strong>
      </div>
      <div>
        <strong>{goods * 50000}</strong>원
      </div>
      <div>
        재고 <strong>{stock}</strong>
      </div>
    </Container>
  );
};

export default GoodsCounter;

const Container = styled.div`
  padding: 20px 0px 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Button = styled.button`
  margin: 0px 20px;
`;
