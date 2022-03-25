import React from "react";
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
// import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar"
import Homescreen from "./screens/Homescreen";
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Adminscreen from './screens/Adminscreen';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Router>
       <Routes>
       <Route path="/" exact element={<Homescreen />} />
       <Route path="/cart" exact element={<Cartscreen />} />
       <Route path="/register" exact element={<Registerscreen />} />
       <Route path="/login" exact element={<Loginscreen />} />
       <Route path="/admin" exact element={<Adminscreen />} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
