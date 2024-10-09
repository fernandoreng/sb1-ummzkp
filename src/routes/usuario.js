const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/registro', usuarioController.registro);
router.post('/login', usuarioController.login);
router.get('/perfil', authMiddleware, usuarioController.getPerfil);
router.put('/perfil', authMiddleware, usuarioController.actualizarPerfil);

module.exports = router;