import React from 'react'
import Register from "./components/Register";
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/header" element={<Header/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App