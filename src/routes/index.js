import express from 'express';
import usuarioRoutes from './usuario.js';
import propietarioRoutes from './propietario.js';
import animalRoutes from './animal.js';
import veterinarioRoutes from './veterinario.js';
import citaRoutes from './cita.js';

const router = express.Router();

router.use('/usuarios', usuarioRoutes);
router.use('/propietarios', propietarioRoutes);
router.use('/animales', animalRoutes);
router.use('/veterinarios', veterinarioRoutes);
router.use('/citas', citaRoutes);

export default router;