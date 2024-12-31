const Router = require('express');
const router = new Router();
const teamController = require('../controllers/TeamController')

router.get('/',teamController.getTeam);
router.post('/create',teamController.createTeam);
router.delete('/delete/:id',teamController.deleteTeam);

module.exports = router