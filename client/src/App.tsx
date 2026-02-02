import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";

function App() {
  const isAdmin = true; 

  return (
    <Router>
      
      <div className="min-h-screen">
        <Header isAdmin={isAdmin} />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            {isAdmin && (
              <Route path="/admin" element={<AdminDashboard />} />
            )}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;



