
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {action, orginals, comedy, romance} from './url'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={orginals} title={"Netflix Orginals"} />
      <RowPost url={action} title={"Action"} isSmall />
      <RowPost url={comedy} title={"Comedy"} isSmall />
      <RowPost url={romance} title={"Romance"} isSmall />
    </div>
  );
}

export default App;
