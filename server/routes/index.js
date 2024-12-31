const Router = require('express')
const router = Router();
const groupRouter = require('./GroupRouter.js')
const teamRouter = require('./TeamRouter.js')
const pilotRouter = require('./PilotRouter.js')
router.use('/group',groupRouter);
router.use('/teams',teamRouter);
router.use('/pilot',pilotRouter);

module.exports = router;