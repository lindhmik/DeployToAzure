
const mongoose=require('mongoose');

const courses_plannedSchema=new mongoose.Schema({year:String, topic:String});
const coursesDoneSchema= new mongoose.Schema({year:String, topic:String});

mongoose.model('courses_planned', courses_plannedSchema, 'courses_planned');
mongoose.model('coursesDone', coursesDoneSchema, 'coursesDone');

//mongoose.model('')
