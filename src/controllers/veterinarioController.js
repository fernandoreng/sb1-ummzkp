const { Veterinario, Usuario, Consultorio } = require('../models');

exports.crearVeterinario = async (req, res) => {
  try {
    const { vet_nombre, vet_telefono, vet_correo, usu_id, con_id } = req.body;

    const nuevoVeterinario = await Veterinario.create({
      vet_nombre,
      vet_telefono,
      vet_correo,
      tbl_usuarios_usu_id: usu_id,
      tbl_consultorio_con_id: con_id,
    });

    res.status(201).json({ message: 'Veterinario creado exitosamente', veterinario: nuevoVeterinario });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear veterinario', error: error.message });
  }
};

exports.listarVeterinarios = async (req, res) => {
  try {
    const veterinarios = await Veterinario.findAll({
      include: [
        { model: Usuario, attributes: ['usu_correo'] },
        { model: Consultorio, attributes: ['con_num_consultario'] },
      ],
    });

    res.json(veterinarios);
  } catch (error) {
    res.status(500).json({ message: 'Error al listar veterinarios', error: error.message });
  }
};

exports.obtenerVeterinario = async (req, res) => {
  try {
    const veterinario = await Veterinario.findByPk(req.params.id, {
      include: [
        { model: Usuario, attributes: ['usu_correo'] },
        { model: Consultorio, attributes: ['con_num_consultario'] },
      ],
    });

    if (!veterinario) {
      return res.status(404).json({ message: 'Veterinario no encontrado' });
    }

    res.json(veterinario);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener veterinario', error: error.message });
  }
};

exports.actualizarVeterinario = async (req, res) => {
  try {
    const { vet_nombre, vet_telefono, vet_correo, con_id } = req.body;

    const veterinario = await Veterinario.findByPk(req.params.id);

    if (!veterinario) {
      return res.status(404).json({ message: 'Veterinario no encontrado' });
    }

    veterinario.vet_nombre = vet_nombre || veterinario.vet_nombre;
    veterinario.vet_telefono = vet_telefono || veterinario.vet_telefono;
    veterinario.vet_correo = vet_correo || veterinario.vet_correo;
    veterinario.tbl_consultorio_con_id = con_id || veterinario.tbl_consultorio_con_id;

    await veterinario.save();

    res.json({ message: 'Veterinario actualizado exitosamente', veterinario });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar veterinario', error: error.message });
  }
};

exports.eliminarVeterinario = async (req, res) => {
  try {
    const veterinario = await Veterinario.findByPk(req.params.id);

    if (!veterinario) {
      return res.status(404).json({ message: 'Veterinario no encontrado' });
    }

    await veterinario.destroy();

    res.json({ message: 'Veterinario eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar veterinario', error: error.message });
  }
};