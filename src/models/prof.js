const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  id: {
    type: Number,
    required: true
  },
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  lattes: {
    type: String,
    required: false
  },
});

module.exports = mongoose.model('Professores', schema);
