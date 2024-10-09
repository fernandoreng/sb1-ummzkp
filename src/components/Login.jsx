import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    usu_correo: '',
    usu_contrasena: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/usuarios/login', formData);
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usu_correo">Email:</label>
          <input
            type="email"
            id="usu_correo"
            name="usu_correo"
            value={formData.usu_correo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="usu_contrasena">Password:</label>
          <input
            type="password"
            id="usu_contrasena"
            name="usu_contrasena"
            value={formData.usu_contrasena}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;