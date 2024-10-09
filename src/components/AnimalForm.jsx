import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AnimalForm() {
  const [formData, setFormData] = useState({
    anim_nombre: '',
    anim_especie: '',
    anim_raza: '',
    anim_fecha_nacimiento: '',
    anim_sexo: '',
    anim_peso: '',
    anim_color: '',
    pro_id: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/animales', formData);
      navigate('/animals');
    } catch (error) {
      console.error('Error creating animal:', error);
    }
  };

  return (
    <div>
      <h2>Add New Animal</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="anim_nombre">Name:</label>
          <input
            type="text"
            id="anim_nombre"
            name="anim_nombre"
            value={formData.anim_nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="anim_especie">Species:</label>
          <input
            type="text"
            id="anim_especie"
            name="anim_especie"
            value={formData.anim_especie}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="anim_raza">Breed:</label>
          <input
            type="text"
            id="anim_raza"
            name="anim_raza"
            value={formData.anim_raza}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="anim_fecha_nacimiento">Birth Date:</label>
          <input
            type="date"
            id="anim_fecha_nacimiento"
            name="anim_fecha_nacimiento"
            value={formData.anim_fecha_nacimiento}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="anim_sexo">Sex:</label>
          <select
            id="anim_sexo"
            name="anim_sexo"
            value={formData.anim_sexo}
            onChange={handleChange}
            required
          >
            <option value="">Select sex</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label htmlFor="anim_peso">Weight:</label>
          <input
            type="number"
            id="anim_peso"
            name="anim_peso"
            value={formData.anim_peso}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="anim_color">Color:</label>
          <input
            type="text"
            id="anim_color"
            name="anim_color"
            value={formData.anim_color}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="pro_id">Owner ID:</label>
          <input
            type="number"
            id="pro_id"
            name="pro_id"
            value={formData.pro_id}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Animal</button>
      </form>
    </div>
  );
}

export default AnimalForm;