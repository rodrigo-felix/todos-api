const { Schema, model } = require('mongoose');

const todoSchema = new Schema(
  {
    todo: { type: String, required: true },
    completed: { type: Boolean, default: false}
    delivery_date: Date,
  },
  {
    timestamps: true,
  }
);

module.exports = model('Todo', todoSchema);