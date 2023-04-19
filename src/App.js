import {  Route, Routes } from "react-router-dom";
import Login from "./component/auth/login";
import Signup from "./component/auth/signup";
import Home from "./component/Home/Home";
import Quiz from "./component/Quiz/Quiz";
function App() {
  return (
   
    <div className="main">
      <div className="sub-main">
      
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/quiz" element={<Quiz/>}/>

    </Routes>
    </div>
    </div>
  );
}

export default App;
