import GoodsCounter from './components/GoodsCounter';
import StockCounter from './components/StockCounter';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <GoodsCounter />
      <StockCounter />
    </Container>
  );
}
export default App;

const Container = styled.div`
  width: 80%;
  margin: 30px auto;
  padding: 20px 0px 40px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
