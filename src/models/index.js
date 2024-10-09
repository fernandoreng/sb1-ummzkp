import sequelize from '../config/database.js';
import Rol from './rol.js';
import TipoDocumento from './tipoDocumento.js';
import Usuario from './usuario.js';
import Propietario from './propietario.js';
import Animal from './animal.js';
import Consultorio from './consultorio.js';
import Veterinario from './veterinario.js';
import Cita from './cita.js';
import Anamnesis from './anamnesis.js';
import Diagnostico from './diagnostico.js';
import HistoriaClinica from './historiaClinica.js';
import Permiso from './permiso.js';
import Tratamiento from './tratamiento.js';
import Vacuna from './vacuna.js';
import HorarioVeterinario from './horarioVeterinario.js';

// Define associations
Rol.hasMany(Usuario);
Usuario.belongsTo(Rol);

TipoDocumento.hasMany(Usuario);
Usuario.belongsTo(TipoDocumento);

Usuario.hasOne(Propietario);
Propietario.belongsTo(Usuario);

Usuario.hasOne(Veterinario);
Veterinario.belongsTo(Usuario);

Propietario.hasMany(Animal);
Animal.belongsTo(Propietario);

Consultorio.hasOne(Veterinario);
Veterinario.belongsTo(Consultorio);

Animal.hasMany(Cita);
Cita.belongsTo(Animal);

Veterinario.hasMany(Cita);
Cita.belongsTo(Veterinario);

Cita.hasOne(Anamnesis);
Anamnesis.belongsTo(Cita);

Anamnesis.hasMany(Diagnostico);
Diagnostico.belongsTo(Anamnesis);

Cita.hasOne(HistoriaClinica);
HistoriaClinica.belongsTo(Cita);

Rol.belongsToMany(Permiso, { through: 'tbl_rol_has_tbl_permisos' });
Permiso.belongsToMany(Rol, { through: 'tbl_rol_has_tbl_permisos' });

Diagnostico.hasMany(Tratamiento);
Tratamiento.belongsTo(Diagnostico);

Diagnostico.hasMany(Vacuna);
Vacuna.belongsTo(Diagnostico);

Veterinario.hasMany(HorarioVeterinario);
HorarioVeterinario.belongsTo(Veterinario);

export {
  sequelize,
  Rol,
  TipoDocumento,
  Usuario,
  Propietario,
  Animal,
  Consultorio,
  Veterinario,
  Cita,
  Anamnesis,
  Diagnostico,
  HistoriaClinica,
  Permiso,
  Tratamiento,
  Vacuna,
  HorarioVeterinario,
};