import Hello from './components/Hello';
import Product from './components/Product';
import Name from './components/Name';
import Number from './components/Number';
import NavBar from './components/NavBar';
import MenuBar from './components/MenuBar';

function App() {
  return (
    <>
      <Hello name="licat" />
      <Product></Product>
      <Name name="너의 이름은..." />
      <Number />
      <NavBar />
      <MenuBar />
    </>
  );
}

export default App;
