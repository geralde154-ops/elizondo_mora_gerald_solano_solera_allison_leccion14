import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Herramientas from './pages/Herramientas';
import Menu from './components/Menu';


export default function App() {

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/herramientas" element={<Herramientas />} />
      </Routes>
    </BrowserRouter>
      
  )
}