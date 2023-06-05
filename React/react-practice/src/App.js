import ColorText from './components/ColorText';
import Resume from './components/Resume';
import Event from './components/Event';

function App() {
  return (
    <div>
      <Resume
        name="김동수"
        hello="안녕하세요~"
        hobby="숨쉬기"
        food="이 세상 모든 것"
        color="blue"
      ></Resume>
      <ColorText color="red" />
      <ColorText color="green" />
      <ColorText color="blue" />
      <Event></Event>
    </div>
  );
}
export default App;
