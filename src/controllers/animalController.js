const { Animal, Propietario } = require('../models');

exports.crearAnimal = async (req, res) => {
  try {
    const { anim_nombre, anim_especie, anim_raza, anim_fecha_nacimiento, anim_sexo, anim_peso, anim_color, pro_id } = req.body;

    const nuevoAnimal = await Animal.create({
      anim_nombre,
      anim_especie,
      anim_raza,
      anim_fecha_nacimiento,
      anim_sexo,
      anim_peso,
      anim_color,
      tbl_propietario_pro_id: pro_id,
    });

    res.status(201).json({ message: 'Animal creado exitosamente', animal: nuevoAnimal });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear animal', error: error.message });
  }
};

exports.listarAnimales = async (req, res) => {
  try {
    const animales = await Animal.findAll({
      include: [{ model: Propietario, attributes: ['pro_nombre'] }],
    });

    res.json(animales);
  } catch (error) {
    res.status(500).json({ message: 'Error al listar animales', error: error.message });
  }
};

exports.obtenerAnimal = async (req, res) => {
  try {
    const animal = await Animal.findByPk(req.params.id, {
      include: [{ model: Propietario, attributes: ['pro_nombre'] }],
    });

    if (!animal) {
      return res.status(404).json({ message: 'Animal no encontrado' });
    }

    res.json(animal);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener animal', error: error.message });
  }
};

exports.actualizarAnimal = async (req, res) => {
  try {
    const { anim_nombre, anim_especie, anim_raza, anim_fecha_nacimiento, anim_sexo, anim_peso, anim_color } = req.body;

    const animal = await Animal.findByPk(req.params.id);

    if (!animal) {
      return res.status(404).json({ message: 'Animal no encontrado' });
    }

    animal.anim_nombre = anim_nombre || animal.anim_nombre;
    animal.anim_especie = anim_especie || animal.anim_especie;
    animal.anim_raza = anim_raza || animal.anim_raza;
    animal.anim_fecha_nacimiento = anim_fecha_nacimiento || animal.anim_fecha_nacimiento;
    animal.anim_sexo = anim_sexo || animal.anim_sexo;
    animal.anim_peso = anim_peso || animal.anim_peso;
    animal.anim_color = anim_color || animal.anim_color;

    await animal.save();

    res.json({ message: 'Animal actualizado exitosamente', animal });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar animal', error: error.message });
  }
};

exports.eliminarAnimal = async (req, res) => {
  try {
    const animal = await Animal.findByPk(req.params.id);

    if (!animal) {
      return res.status(404).json({ message: 'Animal no encontrado' });
    }

    await animal.destroy();

    res.json({ message: 'Animal eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar animal', error: error.message });
  }
};