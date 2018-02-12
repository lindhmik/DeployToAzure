const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/main');
const ctrlDone = require('../controllers/ctrlCourses_done');
const ctrlPlanned= require('../controllers/ctrlCourses_planned');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/courses_done',ctrlDone.courselist);
router.get('/courses_planned',ctrlPlanned.courselist);

module.exports = router;
