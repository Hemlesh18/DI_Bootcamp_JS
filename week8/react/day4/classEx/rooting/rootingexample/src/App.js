import React from 'react';
import './App.css';
import Home from './home';
import { Routes, Route, Link } from 'react-router-dom';
import About from './about';
import Myproject from './myproject';
import Car from './car';



function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
          <Link to='/myproject/react'>My Project react</Link>
          </li>
          <li>
          <Link to='/myproject/js'>My Project js</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route extract path='/' element={<Home/>} />
        <Route extract path='/about' element={<About/>} />
        <Route extract path='/myproject' element={<Myproject/>} />
        <Route extract path="/car" element={<Car/>}/>
      </Routes>
    </>

  );
}

export default App;
