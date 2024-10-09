const express = require('express');
const router = express.Router();
const propietarioController = require('../controllers/propietarioController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, propietarioController.crearPropietario);
router.get('/', authMiddleware, propietarioController.listarPropietarios);
router.get('/:id', authMiddleware, propietarioController.obtenerPropietario);
router.put('/:id', authMiddleware, propietarioController.actualizarPropietario);
router.delete('/:id', authMiddleware, propietarioController.eliminarPropietario);

module.exports = router;