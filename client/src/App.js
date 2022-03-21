import React from "react";
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
// import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
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
     <BrowserRouter>
       <Route path="/" exact component={Homescreen} />
       <Route path="/cart" exact component={Cartscreen} />
       <Route path="/register" exact component={Registerscreen} />
       <Route path="/login" exact component={Loginscreen} />
       <Route path="/admin" exact component={Adminscreen} />
     </BrowserRouter>
    </div>
  );
}

export default App;
