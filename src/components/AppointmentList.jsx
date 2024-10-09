import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/citas');
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  return (
    <div>
      <h2>Appointments</h2>
      <Link to="/appointments/new">Create New Appointment</Link>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.cit_id}>
            Date: {new Date(appointment.cit_fecha).toLocaleString()} - 
            Animal: {appointment.Animal.anim_nombre} - 
            Veterinarian: {appointment.Veterinario.vet_nombre}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentList;