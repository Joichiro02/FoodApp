import React from 'react';
import './App.css';
import Entry from './components/entry/Entry';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Details from './pages/details/Details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Entry/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/detail' element={<Details/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
