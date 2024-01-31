import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { plus, minus } from './../redux/slices/slices';

const GoodsCounter = () => {
  const { stock, goods } = useSelector((state) => ({
    stock: state.goods.stock, // 슬라이스 이름으로 변경
    goods: state.goods.goods, // 슬라이스 이름으로 변경
  }));
  console.log(stock, goods);

  const dispatch = useDispatch();

  const onPlus = () => {
    if (stock > 0) {
      dispatch(plus());
    }
  };

  const onMinus = () => {
    if (goods > 0) {
      dispatch(minus());
    }
  };

  return (
    <Container>
      <h2>판매왕 로봇</h2>
      <span>
        <strong>50,000</strong>원
      </span>
      <div>
        <Button type="button" onClick={onMinus} disabled={goods <= 0}>
          -
        </Button>
        <span>{goods}</span>
        <Button type="button" onClick={onPlus} disabled={stock <= 0}>
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
