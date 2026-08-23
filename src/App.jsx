import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Herramientas from './pages/Herramientas';



export default function App() {

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        
        <Route path="/herramientas" element={<Herramientas />} />
      </Routes>
    </BrowserRouter>
      
  )
}