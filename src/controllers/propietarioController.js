const { Propietario, Usuario } = require('../models');

exports.crearPropietario = async (req, res) => {
  try {
    const { pro_nombre, pro_telefono, pro_correo, usu_id } = req.body;

    const nuevoPropietario = await Propietario.create({
      pro_nombre,
      pro_telefono,
      pro_correo,
      tbl_usuarios_usu_id: usu_id,
    });

    res.status(201).json({ message: 'Propietario creado exitosamente', propietario: nuevoPropietario });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear propietario', error: error.message });
  }
};

exports.listarPropietarios = async (req, res) => {
  try {
    const propietarios = await Propietario.findAll({
      include: [{ model: Usuario, attributes: ['usu_correo'] }],
    });

    res.json(propietarios);
  } catch (error) {
    res.status(500).json({ message: 'Error al listar propietarios', error: error.message });
  }
};

exports.obtenerPropietario = async (req, res) => {
  try {
    const propietario = await Propietario.findByPk(req.params.id, {
      include: [{ model: Usuario, attributes: ['usu_correo'] }],
    });

    if (!propietario) {
      return res.status(404).json({ message: 'Propietario no encontrado' });
    }

    res.json(propietario);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener propietario', error: error.message });
  }
};

exports.actualizarPropietario = async (req, res) => {
  try {
    const { pro_nombre, pro_telefono, pro_correo } = req.body;

    const propietario = await Propietario.findByPk(req.params.id);

    if (!propietario) {
      return res.status(404).json({ message: 'Propietario no encontrado' });
    }

    propietario.pro_nombre = pro_nombre || propietario.pro_nombre;
    propietario.pro_telefono = pro_telefono || propietario.pro_telefono;
    propietario.pro_correo = pro_correo || propietario.pro_correo;

    await propietario.save();

    res.json({ message: 'Propietario actualizado exitosamente', propietario });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar propietario', error: error.message });
  }
};

exports.eliminarPropietario = async (req, res) => {
  try {
    const propietario = await Propietario.findByPk(req.params.id);

    if (!propietario) {
      return res.status(404).json({ message: 'Propietario no encontrado' });
    }

    await propietario.destroy();

    res.json({ message: 'Propietario eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar propietario', error: error.message });
  }
};