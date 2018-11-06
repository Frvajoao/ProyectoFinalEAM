let express = require('express');
let PlaceController = require('../controllers/PlaceController');
let UserController = require('../controllers/UserController');

let router = express.Router();

//Lista todos los lugares de la coleccion
router.get('/places', PlaceController.show);

//Creamos un lugar
router.post('/places', PlaceController.store);

//Buscamos un lugar por id
router.get('/places/:id', PlaceController.find);

//Actualizamos un lugar
router.put('/places/:id', PlaceController.update);

//Eliminamos un lugar
router.post('/places/:id', PlaceController.destroy);

//Obtenemos todos los usuarios
router.get('/users',UserController.show);

//Buscamos un usuario
router.get('/users/:id',UserController.find);

//Creamos un usuario
router.post('/users', UserController.store);

module.exports = router;
