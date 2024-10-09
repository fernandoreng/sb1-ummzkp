import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    usu_documento: '',
    usu_correo: '',
    usu_contrasena: '',
    rol_id: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/usuarios/registro', formData);
      navigate('/login');
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usu_documento">Document:</label>
          <input
            type="text"
            id="usu_documento"
            name="usu_documento"
            value={formData.usu_documento}
            onChange={handleChange}
            required
          />
        </div>
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
        <div>
          <label htmlFor="rol_id">Role ID:</label>
          <input
            type="number"
            id="rol_id"
            name="rol_id"
            value={formData.rol_id}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;