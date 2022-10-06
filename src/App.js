
import './App.css';
import Headline from './Hedline';
import Khobor from './Khobor';
import data from './data';
//commited from browser
function App() {
  return (
    <div className='h-full w-full'>
      <Headline />
      <Khobor news1={data[0]} news2={data[1]} news3={data[2]} />
      <Khobor news1={data[3]} news2={data[4]} news3={data[5]} />
      <Khobor news1={data[6]} news2={data[7]} news3={data[8]} />
    </div>
  );
}

export default App;
