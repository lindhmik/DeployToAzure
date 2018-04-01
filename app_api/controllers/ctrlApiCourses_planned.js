const mongoose = require('mongoose');

const courses_planned_model = mongoose.model('courses_planned');

/*const courselist = function (req,res) {
    res
        .status(200)
        .json({'year' : 'topic'});

};

const addCourse = function(req,res){
    res.status(201).json({'Add course':'Work in progress'});
};*/
const courselist = function (req,res) {
    courses_done_model.find({}, function (err, courses) {
        if (err) {
            res.status(404).json(err);
        }
        else
        {
            res.status(200).json(courses);
        }
    });

}
    const addCourse = function(req,res){
        courses_done_model.create(req.body,function (err, newCourse) {
            if(err){
                res.status(400).json(err);
            }
            else {
                res.status(201).json(newCourse);
            }
        });
    };

module.exports = {
    courselist,
    addCourse
}