const request = require('request');
const apiURL = require('./apiURLs');

const showForm = function(req,res){
    res.render('courses_done_add')
}

const addData = function(req, res){
    const path = '/api/courses_done';

    const postdata = {
        year: req.body.year,
        course: req.body.course
    };

    const requestOptions = {
        url: apiURL.server + path,
        method: 'POST',
        json: postdata
    };

    request(
        requestOptions,
        function (err, response) {
            if (response.statusCode === 201){
                res.redirect('/courses_done');
            } else {
                res.render('error', {message: ' Error while adding data: ' +
                response.statusMessage + ' (' + response.statusCode + ')'});
            }

        }
    )
}

const courselist = function(req, res) {
    const path = '/api/courses_done';
    const requestOptions = {
        url: apiURL.server + path,
        method: 'GET',
        json: {},
        qs: {}
    };
    request
    {
        requestOptions,
            function (err, response, body) {
                if (err) {
                    res.render('error', {message: 'Error accessing API: ' + response.statusMessage + ' (' + response.statusCode + ')'});
                } else if (response.statusCode !== 200) {
                    res.render('error', {message: 'Unexcepted response data:'});
                } else if (!body.length) {
                    res.render('error', {message: 'No documents in collection:'});
                } else {
                    res.render('courses_done', {courses: body});
                }
            }

    };
};
    module.exports={
      courselist,
      showForm,
      addData
    };
