const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Grade', gradeSchema);
