import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component { 


  render() {
    return (
      <div>
         <BrowserRouter>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<News key='general' pagesize='6' category='general'/>} />
        <Route exact path="/business" element={<News key='business' pagesize='6' category='business'/>} />
        <Route exact path="/entertainment" element={<News key='entertainment' pagesize='6' category='entertainment'/>} />
        <Route exact path="/health" element={<News key='health' pagesize='6' category='health'/>} />
        <Route exact path="/science" element={<News key='science' pagesize='6' category='science'/>} />
        <Route exact path="/sports" element={<News key='sports' pagesize='6' category='sports'/>} />
        <Route exact path="/technology" element={<News key='technology' pagesize='6' category='technology'/>} />
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

