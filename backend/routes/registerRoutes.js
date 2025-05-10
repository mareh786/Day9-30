const express = import('express');
const router = express.Router();
const controller = require('../controllers/registerController');

router.post('/register', controller.registerEntry);
router.get('/entries', controller.getAllEntries);
router.get('/inside', controller.getInside);

module.exports = router;
