import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Data from './fetch/Data';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Data />} />
    </Routes>
     
    </BrowserRouter>
  );
}

export default App;
