
import './App.css';
import HomePage from './Component/HomePage';
import Login from './Component/Login';
import Signup from './Component/Signup';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
      </Routes>
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <HomePage/> */}
    </div>

  );
}

export default App;
