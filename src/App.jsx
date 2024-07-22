// 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginUser from './components/LoginUser';
import UserRegistration from './components/UserRegistration';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginUser />} />
        <Route path="/" element={<UserRegistration/>} />
      </Routes>
    </Router>
  );
};

export default App;
