const Router = require('express');
const router = new Router();
const pilotController = require('../controllers/PilotController')

router.get('/',pilotController.getPilot);
router.post('/create',pilotController.createPilot);
router.delete('/delete/:id',pilotController.deletePilot);

module.exports = router