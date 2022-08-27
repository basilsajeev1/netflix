
import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import RowPosters from './components/RowPosters/RowPosters';
import{originals,action} from './constants/constants'

function App() {
  return (
    <div>
    <NavBar/>
    <Banner/>
    <RowPosters url={originals} title={'Netflix Originals'}/>
    <RowPosters url={action} title={'Action'}/>
    </div>
  );
}

export default App;
