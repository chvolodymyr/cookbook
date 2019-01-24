const router = require('express').Router();
const controller = require('../controllers/historyController');

router.get('/', controller.getHistory);
router.get('/:recipeId', controller.getHistoryByRecipeId);

module.exports = router;