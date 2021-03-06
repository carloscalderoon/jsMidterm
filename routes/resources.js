// Our router module
const router = require('express').Router();

// Our controller
const ResourcesController = require('../controllers/resourcesController');

// Our routes
router.get(`/`, ResourcesController.show);
router.get(`/new`, ResourcesController.new);

// We have to export our changes
module.exports = router;