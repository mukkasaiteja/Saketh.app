import Nav from './components/Nav';
import Home from './components/Home';
import './App.css';
import Fruits from './components/Fruits';
import Vegtables from './components/Vegtables';
import Plants from './components/Plants';
import Mango from './components/Mango';
import Grape from './components/Grape';
import Potato from './components/Potato';
import Tomato from './components/Tomato';
import Rose from './components/Rose';
import New from './components/New';
import { Routes ,Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
<Nav/>


      <Routes>
       
          <Route path='/' element={<Home/>} />
          <Route path="/Plants" element={<Plants />} />
          <Route path="/Vegtables" element={<Vegtables />} />
          <Route path="/Fruits" element={<Fruits />} />
          <Route path='/mango' element={<Mango/>}/>
          <Route path='/Grape' element={<Grape/>}/>
          <Route path='/Potato' element={<Potato/>}/>
         <Route path='/Tomato' element={<Tomato />}/>
         <Route path='/Rose' element={<Rose />}/>
         <Route path='/New' element={<New/>}/>
        
         
       
      </Routes>
     

    </div>
  );
}

export default App;
