const express = require('express');
const router = express.Router();
const profsController = require('../controllers/profs-controller');

router.get('/', profsController.listProfessores);
router.post('/', profsController.createProfessor);

module.exports = router;
