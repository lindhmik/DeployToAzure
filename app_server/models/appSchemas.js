const mongoose=require('mongoose');

const courses_planned=new mongoose.Schema({year:String, topic:String});
const coursesDone= new mongoose.Schema({year:String, topic:String});

mongoose.model('courses_planned', courses_plannedSchema);
mongoose.model('coursesDone',coursesDoneSchema);
