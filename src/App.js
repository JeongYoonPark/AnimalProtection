  import Adotion from './pages/Adotion';
import Login from './pages/Login';
import Register from './pages/Register';
import Board from './pages/Board';
import Volunteer from './pages/Volunteer';
import Main from "./pages/Main";
import './App.css';
import {Routes, Route} from 'react-router';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/volunteer" element={<Volunteer/>}></Route>
          <Route path="/adotion" element={<Adotion/>}></Route>
          <Route path="/board" element={<Board/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
