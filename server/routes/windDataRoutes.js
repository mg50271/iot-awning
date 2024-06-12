const express = require('express');
const { createWindData, getWindData, getLastWindData, getLastFiveWindData } = require('../controllers/windDataController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/', createWindData);
router.get('/:awning_id', getWindData);
router.get('/last/:awning_id', getLastWindData);
router.get('/last5/:awning_id', getLastFiveWindData);

module.exports = router;