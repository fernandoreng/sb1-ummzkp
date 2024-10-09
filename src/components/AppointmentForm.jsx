import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AppointmentForm() {
  const [animals, setAnimals] = useState([]);
  const [veterinarians, setVeterinarians] = useState([]);
  const [formData, setFormData] = useState({
    cit_fecha: '',
    anim_id: '',
    vet_id: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchAnimals();
    fetchVeterinarians();
  }, []);

  const fetchAnimals = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/animales');
      setAnimals(response.data);
    } catch (error) {
      console.error('Error fetching animals:', error);
    }
  };

  const fetchVeterinarians = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/veterinarios');
      setVeterinarians(response.data);
    } catch (error) {
      console.error('Error fetching veterinarians:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/citas', formData);
      navigate('/appointments');
    } catch (error) {
      console.error('Error creating appointment:', error);
    }
  };

  return (
    <div>
      <h2>Create New Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cit_fecha">Date and Time:</label>
          <input
            type="datetime-local"
            id="cit_fecha"
            name="cit_fecha"
            value={formData.cit_fecha}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="anim_id">Animal:</label>
          <select
            id="anim_id"
            name="anim_id"
            value={formData.anim_id}
            onChange={handleChange}
            required
          >
            <option value="">Select an animal</option>
            {animals.map((animal) => (
              <option key={animal.anim_id} value={animal.anim_id}>
                {animal.anim_nombre}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="vet_id">Veterinarian:</label>
          <select
            id="vet_id"
            name="vet_id"
            value={formData.vet_id}
            onChange={handleChange}
            required
          >
            <option value="">Select a veterinarian</option>
            {veterinarians.map((vet) => (
              <option key={vet.vet_id} value={vet.vet_id}>
                {vet.vet_nombre}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Create Appointment</button>
      </form>
    </div>
  );
}

export default AppointmentForm;