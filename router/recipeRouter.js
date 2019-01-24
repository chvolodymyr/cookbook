const router = require('express').Router();
const upload = require('../middleware/uploads');
const controller = require('../controllers/recipeController');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.delete('/:id', controller.remove);
router.post('/',upload.single('image'), controller.create);
router.patch('/:id',upload.single('image'), controller.update);


module.exports = router ;