import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
  todo: String,
  resolved: Boolean,
});

export const TodoModel = mongoose.model('Todo', TodoSchema);
