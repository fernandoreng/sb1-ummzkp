import express from 'express';
import { crearCita, listarCitas, obtenerCita, actualizarCita, eliminarCita } from '../controllers/citaController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, crearCita);
router.get('/', authMiddleware, listarCitas);
router.get('/:id', authMiddleware, obtenerCita);
router.put('/:id', authMiddleware, actualizarCita);
router.delete('/:id', authMiddleware, eliminarCita);

export default router;