const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/ctrlMain');
const ctrlDone = require('../controllers/ctrlCourses_done');
const ctrlPlanned= require('../controllers/ctrlCourses_planned');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/courses_done', ctrlDone.courselist);
router.get('/courses_planned', ctrlPlanned.courselist);

router
    .route('/courses_done/add')
    .get(ctrlDone.showForm)
    .post(ctrlDone.addData)

router
    .route('/courses_planned/add')
    .get(ctrlPlanned.showForm)
    .post(ctrlPlanned.addData);
module.exports = router;
