const express = require('express');
const router = express.Router();
const {verificarToken} = require("../middelware/authMiddleware");
const {autorizarRoles} = require("../middelware/rolMiddelware")
const tareaController = require('../controllers/tareaController');


router.get('/tareas', verificarToken, tareaController.getTareas);
router.delete('/tareas/:id', verificarToken, autorizarRoles('admin'), tareaController.deleteTarea);
router.post('/tareas', verificarToken, tareaController.createTarea)

module.exports = router;