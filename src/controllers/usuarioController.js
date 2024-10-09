const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Usuario, Rol } = require('../models');

exports.registro = async (req, res) => {
  try {
    const { usu_documento, usu_correo, usu_contrasena, rol_id } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(usu_contrasena, salt);

    const nuevoUsuario = await Usuario.create({
      usu_documento,
      usu_correo,
      usu_contrasena: hashedPassword,
      usu_salt: salt,
      usu_estado: 'activo',
      usu_fecha_creacion: new Date(),
      tbl_rol_rol_id: rol_id,
    });

    res.status(201).json({ message: 'Usuario registrado exitosamente', usuario: nuevoUsuario });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar usuario', error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { usu_correo, usu_contrasena } = req.body;

    const usuario = await Usuario.findOne({ where: { usu_correo } });

    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const validPassword = await bcrypt.compare(usu_contrasena, usuario.usu_contrasena);

    if (!validPassword) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    const token = jwt.sign({ id: usuario.usu_id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({ message: 'Login exitoso', token });
  } catch (error) {
    res.status(500).json({ message: 'Error al iniciar sesión', error: error.message });
  }
};

exports.getPerfil = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.usuario.id, {
      include: [{ model: Rol, attributes: ['rol_nombre'] }],
      attributes: { exclude: ['usu_contrasena', 'usu_salt'] },
    });

    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json(usuario);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener perfil', error: error.message });
  }
};

exports.actualizarPerfil = async (req, res) => {
  try {
    const { usu_documento, usu_correo } = req.body;

    const usuario = await Usuario.findByPk(req.usuario.id);

    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    usuario.usu_documento = usu_documento || usuario.usu_documento;
    usuario.usu_correo = usu_correo || usuario.usu_correo;

    await usuario.save();

    res.json({ message: 'Perfil actualizado exitosamente', usuario });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar perfil', error: error.message });
  }
};