const courselist = function(req,res) {
    res.render('courses_planned', {
        courses:
            [
                {year: '2018', topic: 'Web App development with MEAN'},
                {year: '2018', topic: 'Web App development with PHP/SQL'},
                {year: '2018', topic: 'Native mobile application development(Android)'},
                {year: '2018', topic: 'Requirements analysis for software development'}

            ]
    });
}
module.exports={
    courselist
}