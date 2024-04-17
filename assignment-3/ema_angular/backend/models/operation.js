/**
 * Constant mongoose that references required Mongoose
 */
const mongoose = require("mongoose");
/**
 * Schema for Operation 
 */
const operationSchema = mongoose.Schema({
  category_size: {
    type: Number,
    default: 0,
  },
  event_size: {
    type: Number,
    default: 0,
  },
  add_count: {
    type: Number,
    default: 0,
  },
  update_count: {
    type: Number,
    default: 0,
  },
  delete_count: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Operation", operationSchema);
