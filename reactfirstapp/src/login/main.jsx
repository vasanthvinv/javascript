import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Register from './register';
import Password from './Password';



function App() {

  return (
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<Login  />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-pwd" element={<Password />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
