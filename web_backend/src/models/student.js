const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: { type: String },
  teacher: { type: String },
  grades: [{
    lesson: {type: String},
    score: {type: Number}
  }]
});
export default mongoose.model('Student', StudentSchema);
