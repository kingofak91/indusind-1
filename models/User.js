const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  uniqueid: { type: String, required: true, unique: true },
  entries: [
    {
      fullName: { type: String, required: true },
      mobileNumber: { type: String, required: true },
      aadharNumber: { type: String, required: true },
      panCard: { type: String, required: true },
      dob: { type: String, required: true },
      submittedAt: { type: Date, default: Date.now }
    }
  ]
});

module.exports = mongoose.model('User', userSchema);
