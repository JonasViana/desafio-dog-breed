import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Cadastro from './pages/Cadastro';
import Header from './components/Header';
import Home from './pages/Home';


function App() {

  return (
    <div className="App">
      <div>
        <Header/>
     <BrowserRouter>
          <Routes>
            <Route path='/' element={<Cadastro/>} />
            <Route path='/list' element={<Home />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
