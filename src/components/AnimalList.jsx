import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AnimalList() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetchAnimals();
  }, []);

  const fetchAnimals = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/animales');
      setAnimals(response.data);
    } catch (error) {
      console.error('Error fetching animals:', error);
    }
  };

  return (
    <div>
      <h2>Animals</h2>
      <Link to="/animals/new">Add New Animal</Link>
      <ul>
        {animals.map((animal) => (
          <li key={animal.anim_id}>
            {animal.anim_nombre} - {animal.anim_especie} - {animal.anim_raza}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnimalList;