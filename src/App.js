import './App.css';
import { BrowserRouter, Routes} from "react-router-dom"
import Cadastro from './pages/Cadastro';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <div>
        <Header/>
        <Cadastro/>
        <BrowserRouter>
          <Routes>
          
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
