const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  department: { type: String, required: true },
  userRole: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dob: { type: String, required: true },
  profileImage: { type: String, required: true },
  status: {
    type: String,
    enum: ['Active', 'Inactive'],
    default: 'Active',
  },
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);
