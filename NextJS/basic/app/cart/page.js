import data from './data';

export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem />
    </div>
  );
}

function CartItem() {
  return (
    <>
      {data.map((d) => (
        <div className="cart-item" key={d}>
          <p>{d.name}</p>
          <p>{d.price}</p>
          <p>{d.count}</p>
        </div>
      ))}
    </>
  );
}
