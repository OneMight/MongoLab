const Router = require('express');
const router = new Router();
const groupsController = require('../controllers/GroupController')

router.get('/',groupsController.getGroup);
router.post('/create',groupsController.createGroup);
router.delete('/delete/:id',groupsController.deleteGroup);

module.exports = router