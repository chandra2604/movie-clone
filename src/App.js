import logo from './logo.svg';
import Test from './component/Header';
import Home from './component/Home'
import Car from './component/Carousel';
import Newpage from './component/Newpage';
import { Routes, Route } from 'react-router-dom';
import Details from './component/Details'

import "./App.css"
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='' element={<Home />}></Route>

        <Route path='/details' element={<Details />}>

        </Route>
      </Routes>



    </div>
  );
}

export default App;
