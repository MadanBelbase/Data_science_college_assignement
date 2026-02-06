import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LoginUI from './pages/Login';
import DashboardUI from './pages/Dashboard';
import LinkAccountUI from './pages/LinkAccount';
import Header from './components/Header';
import SignUp from './pages/SignUp';

const AppUI: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Toaster position="top-right" />
        <Header />

        <Routes>
        <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LoginUI />} />

          <Route path="/dashboard" element={<DashboardUI />} />
          <Route path="/link-account" element={<LinkAccountUI />} />
          <Route path="/" element={<LoginUI />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppUI;
