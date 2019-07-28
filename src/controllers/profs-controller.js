const mongoose = require('mongoose');
const Professores = mongoose.model('Professores');

// list
exports.listProfessores = async (req, res) => {
  try {
    const data = await Professores.find({});
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar os professores.'});
  }
};

// create
exports.createProfessor = async (req, res) => {
  try {
    const professor = new Professores({
      id: req.body.id,
      nome: req.body.nome,
      email: req.body.email,
      lattes: req.body.lattes
    });

    console.log(professor)

    await professor.save();

    res.status(201).send({message: 'Professor cadastrada com sucesso!'});
  } catch (e) {
    res.status(500).send({message: 'Falha ao cadastrar o professor'});
  }
};
