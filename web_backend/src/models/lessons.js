const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LessonSchema = new Schema({
    id: { type: String},
    name: { type: String },
    quiz: { type: String}, //Change to Quiz later
    worksheets: { type: String},
    notes: [
      {
        name: String,
        url: String
      }
    ]
  });
  
export default mongoose.model('Lesson', LessonSchema);
