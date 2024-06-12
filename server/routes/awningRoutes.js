const express = require('express');
const {
  createAwning,
  getAwnings,
  getAwningById,
  updateAwning,
  deleteAwning,
} = require('../controllers/awningController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/:email', createAwning);
router.get('/:email', getAwnings);
router.get('/:id/:email', getAwningById);
router.put('/:id/:email', updateAwning);
router.delete('/:id/:email',  deleteAwning);

module.exports = router;