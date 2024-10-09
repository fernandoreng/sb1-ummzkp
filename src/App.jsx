import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './components/Home';
import AppointmentList from './components/AppointmentList';
import AppointmentForm from './components/AppointmentForm';
import AnimalList from './components/AnimalList';
import AnimalForm from './components/AnimalForm';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {isAuthenticated ? (
            <>
              <li><Link to="/appointments">Appointments</Link></li>
              <li><Link to="/animals">Animals</Link></li>
              <li><button onClick={() => {
                localStorage.removeItem('token');
                setIsAuthenticated(false);
              }}>Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          )}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointments" element={<PrivateRoute><AppointmentList /></PrivateRoute>} />
        <Route path="/appointments/new" element={<PrivateRoute><AppointmentForm /></PrivateRoute>} />
        <Route path="/animals" element={<PrivateRoute><AnimalList /></PrivateRoute>} />
        <Route path="/animals/new" element={<PrivateRoute><AnimalForm /></PrivateRoute>} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;