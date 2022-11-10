import Navbar from './components/Navbar';
import Home from './components/Home';
import DrinkTab from './components/DrinkTab';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const alcohol = useSelector((state) => state.currentAlcohol);
  console.log(alcohol);
  return (
    <div className='app'>
      <aside className='sidebar'>
        <Navbar />
      </aside>
      <main className='main'>{alcohol ? <DrinkTab /> : <Home />}</main>
    </div>
  );
}

export default App;
