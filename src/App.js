
import './App.css';
import Bolg from './component/Bolg';
import Signin from './component/Signin';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Add from './component/Add';

function App() {
  
  return (

    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Signin/>}/>
    <Route path='/blog' element={<Bolg/>}/>
    <Route path='/add' element={<Add/>}/>
    
    
    
    </Routes>
    
    </BrowserRouter>

   

   </div>
  );
}

export default App;
