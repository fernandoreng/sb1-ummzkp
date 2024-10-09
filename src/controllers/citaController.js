import { Cita, Animal, Veterinario } from '../models/index.js';

export const crearCita = async (req, res) => {
  try {
    const { cit_fecha, anim_id, vet_id } = req.body;

    const nuevaCita = await Cita.create({
      cit_fecha,
      tbl_animales_anim_id: anim_id,
      tbl_veterinario_vet_id: vet_id,
    });

    res.status(201).json({ message: 'Cita creada exitosamente', cita: nuevaCita });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear cita', error: error.message });
  }
};

export const listarCitas = async (req, res) => {
  try {
    const citas = await Cita.findAll({
      include: [
        { model: Animal, attributes: ['anim_nombre'] },
        { model: Veterinario, attributes: ['vet_nombre'] },
      ],
    });

    res.json(citas);
  } catch (error) {
    res.status(500).json({ message: 'Error al listar citas', error: error.message });
  }
};

export const obtenerCita = async (req, res) => {
  try {
    const cita = await Cita.findByPk(req.params.id, {
      include: [
        { model: Animal, attributes: ['anim_nombre'] },
        { model: Veterinario, attributes: ['vet_nombre'] },
      ],
    });

    if (!cita) {
      return res.status(404).json({ message: 'Cita no encontrada' });
    }

    res.json(cita);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener cita', error: error.message });
  }
};

export const actualizarCita = async (req, res) => {
  try {
    const { cit_fecha, anim_id, vet_id } = req.body;

    const cita = await Cita.findByPk(req.params.id);

    if (!cita) {
      return res.status(404).json({ message: 'Cita no encontrada' });
    }

    cita.cit_fecha = cit_fecha || cita.cit_fecha;
    cita.tbl_animales_anim_id = anim_id || cita.tbl_animales_anim_id;
    cita.tbl_veterinario_vet_id = vet_id || cita.tbl_veterinario_vet_id;

    await cita.save();

    res.json({ message: 'Cita actualizada exitosamente', cita });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar cita', error: error.message });
  }
};

export const eliminarCita = async (req, res) => {
  try {
    const cita = await Cita.findByPk(req.params.id);

    if (!cita) {
      return res.status(404).json({ message: 'Cita no encontrada' });
    }

    await cita.destroy();

    res.json({ message: 'Cita eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar cita', error: error.message });
  }
};