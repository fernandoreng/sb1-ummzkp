const express = require('express');
const router = express.Router();
const veterinarioController = require('../controllers/veterinarioController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, veterinarioController.crearVeterinario);
router.get('/', authMiddleware, veterinarioController.listarVeterinarios);
router.get('/:id', authMiddleware, veterinarioController.obtenerVeterinario);
router.put('/:id', authMiddleware, veterinarioController.actualizarVeterinario);
router.delete('/:id', authMiddleware, veterinarioController.eliminarVeterinario);

module.exports = router;