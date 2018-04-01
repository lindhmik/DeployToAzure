const express = require('express');
const router = express.Router();

const ctrlApiCourses_done = require('../controllers/ctrlApiCourses_done');
const ctrlApiCourses_planned = require('../controllers/ctrlApiCourses_planned');

router
    .route('/courses_done')
    .get(ctrlApiCourses_done.courselist)
    .post(ctrlApiCourses_done.addCourse);

router
    .route('/courses_planned')
    .get(ctrlApiCourses_planned.courselist)
    .post(ctrlApiCourses_planned.addCourse);

module.exports = router;