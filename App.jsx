import './App.css';
import Home from "./page/Home"
import { Route,Routes } from 'react-router-dom';
import Favorites from './page/Favorites';
import NavBar from "./components1/NavBar";


function App() {

  return (
    <div>
      <NavBar/>
    <main className=' main-ontent'>
      <Route>
        <Route path="/" element={<Home/>}/>
        <Route path="/Favorites" element={<Favorites/>}/>
      </Route>
    </main>
    </div>
  );
}

export default App;
