// Our router module
const router = require('express').Router();

// Our controller
const ArcadeGamesController = require('../controllers/arcadeGamesController');

// Our routes
router.get(`/`, ArcadeGamesController.show);
router.get(`/new`, ArcadeGamesController.new);
router.get(`/edit`, ArcadeGamesController.edit);
router.get(`/update`, ArcadeGamesController.update);
router.get(`/destroy`, ArcadeGamesController.destroy);


// We have to export our changes
module.exports = router;