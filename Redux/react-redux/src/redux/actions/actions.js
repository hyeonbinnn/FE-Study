export const PLUS = 'PLUS';
export const MINUS = 'MINUS';
export const SALE = 'SALE';
export const SOLD_OUT = 'SOLD_OUT';

export const plusNumber = () => {
  return { type: PLUS };
};

export const minusNumber = () => {
  return { type: MINUS };
};

export const sale = () => {
  return { type: SALE };
};

export const soldOut = () => {
  return { type: SOLD_OUT };
};
