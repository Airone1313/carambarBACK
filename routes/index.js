const express = require('express');
const controllerStudent = require('../controllers');
const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).json({ success: 'RACINE API' });
});

router.get('/test', (req, res) => {
    res.status(200).json({ message: 'test' });
});

router.get('/random',controllerStudent.random );

router.get('/students', controllerStudent.findAll);
router.post('/students', controllerStudent.create);

module.exports = router;