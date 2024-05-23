export default function List() {
  let product = ['Tomato', 'Pasta', 'Coconut', 'Apple', 'Donut'];
  return (
    <>
      <h4 className="title">상품 목록</h4>
      {product.map((p, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.svg`} alt="음식 이미지" className="food-img" />
            <h4>{p} $40</h4>
          </div>
        );
      })}
    </>
  );
}
