const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  prioridad: { type: String, enum: ['Baja', 'Media', 'Alta'], required: true },
  fechaCreacion: { type: Date, default: Date.now },
  fechaVencimiento: { type: Date, required: true },
  estado: { type: String, enum: ['Pendiente', 'Completada'], default: 'Pendiente' }
});

module.exports = mongoose.model('Task', taskSchema);