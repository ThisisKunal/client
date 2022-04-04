
import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Rootpage from './Pages/Rootpage';
import Dashboard from './Pages/Dashboard';
import Test from './Pages/Test';
import Startquiz from './Pages/Startquiz';
import Addqustions from './Component/Addqustions';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
  
            <Route path="/" element={<Rootpage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/test" element={<Test/>}/>
            <Route exact path="/startquiz" element={<Startquiz/>}/>
             <Route exact path="/createquiz" element={<Addqustions/>}/>
            
      </Routes> 
      {/* <Test/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* {/* <HomePage/> */}
    </div>

  );
}

export default App;
