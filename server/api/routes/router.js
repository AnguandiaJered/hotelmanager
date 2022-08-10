const router = require('express').Router();
const storageImage = require('../middlewares/storage_images');
const checkAut = require('../middlewares/check_auth');

const users = require('../controllers/users');
const client = require('../controllers/client');
const agent = require('../controllers/agent');
const classe = require('../controllers/classes');
const paieroom = require('../controllers/paierooms');
const paiesalle = require('../controllers/paiesalles');
const reserveroom = require('../controllers/reservationrooms');
const reservesalle = require('../controllers/reservationsalles');
const room = require('../controllers/rooms');
const salle = require('../controllers/salles');

// client roots
router.post('/client', checkAut,storageImage.array('images', 4),client.createClient);
router.get('/client',checkAut,client.findClient);
router.get('/client/single/:clientId',checkAut,client.getSingleClient);
router.put('/client/:clientId',checkAut,storageImage.array('images', 4),client.updateClient);
router.delete('/client/:clientId',checkAut,client.deleteclient);

// agent roots
router.post('/agent', checkAut,storageImage.array('images', 4),agent.createAgent);
router.get('/agent',checkAut,agent.findAgent);
router.get('/agent/single/:agentId',checkAut,agent.getSingleAgent);
router.put('/agent/:agentId',checkAut,storageImage.array('images', 4),agent.updateAgent);
router.delete('/agent/:agentId',checkAut,agent.deleteAgent);

// users roots
router.post('/users/signup', checkAut,users.creatUsers);
router.get('/users', checkAut,users.findUsers);
router.get('/users/single/:userId', checkAut,users.getSingleUsers);
router.delete('/users/:userId',checkAut,users.deleteUsers);
router.put('/users/:userId',checkAut,users.updateUsers);

// login root
router.post('/users/singin', users.userLogin);

// classe room roots
router.post('/classe',checkAut,classe.createClasses);
router.get('/classe',checkAut,classe.findClasse);
router.get('/classe/single/classeId',checkAut,classe.getSingleClasse);
router.delete('/classe/classeId',checkAut,classe.deleteClasse);
router.put('/classe/classeId',checkAut,classe.updateClasse);

// paiement chambre roots
router.post('/paiementroom',checkAut,paieroom.createPaierooms);
router.get('/paiementroom',checkAut,paieroom.findPaierooms);
router.get('/paiementroom/single/paieId',checkAut,paieroom.getSinglePaierooms);
router.put('/paiementroom/paieId',checkAut,paieroom.updatePaierooms);
router.delete('/paiementroom/paieId',checkAut,paieroom.deletePaierooms);

// paiement salle roots
router.post('/paiementsalle',checkAut,paiesalle.createPaiesalles);
router.get('/paiementsalle',checkAut,paiesalle.findPaiesalles);
router.get('/paiementsalle/single/paieId',checkAut,paiesalle.getSinglePaiesalles);
router.put('/paiementsalle/paieId',checkAut,paiesalle.updatePaiesalles);
router.delete('/paiementsalle/paieId',checkAut,paiesalle.deletePaiesalles);

// reservation salle roots
router.post('/reservesalle',checkAut,reservesalle.createReservesalles);
router.get('/reservesalle',checkAut,reservesalle.findReservesalles);
router.get('/reservesalle/single/reserveId',checkAut,reservesalle.getSingleReservesalles);
router.put('/reservesalle/reserveId',checkAut,reservesalle.updateReservesalles);
router.delete('/reservesalle/reserveId',checkAut,reservesalle.deleteReservesalles);

// reservation chambre roots
router.post('/reserveroom',checkAut,reserveroom.createReserverooms);
router.get('/reserveroom',checkAut,reserveroom.findReserverooms);
router.get('/reserveroom/single/reserveId',checkAut,reserveroom.getSingleReserverooms);
router.put('/reserveroom/reserveId',checkAut,reserveroom.updateReserverooms);
router.delete('/reserveroom/reserveId',checkAut,reserveroom.deleteReserverooms);

// chambre roots
router.post('/room',checkAut,room.createRooms);
router.get('/room',checkAut,room.findRooms);
router.get('/room/single/roomId',checkAut,room.getSingleRooms);
router.put('/room/roomId',checkAut,room.updateRooms);
router.delete('/room/roomId',checkAut,room.deleteRooms);

// salle roots
router.post('/salle',checkAut,salle.createSalle);
router.get('/salle',checkAut,salle.findSalle);
router.get('/salle/single/roomId',checkAut,salle.getSingleSalle);
router.put('/salle/roomId',checkAut,salle.updateSalle);
router.delete('/salle/roomId',checkAut,salle.deleteSalle);


module.exports = router;


