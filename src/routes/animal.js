const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, animalController.crearAnimal);
router.get('/', authMiddleware, animalController.listarAnimales);
router.get('/:id', authMiddleware, animalController.obtenerAnimal);
router.put('/:id', authMiddleware, animalController.actualizarAnimal);
router.delete('/:id', authMiddleware, animalController.eliminarAnimal);

module.exports = router;