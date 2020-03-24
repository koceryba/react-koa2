import mongoose from 'mongoose';

const recipe = mongoose.Schema({
  title: String,
  description: String,
  create: { type: Date, default: Date.now, optional: true },
  updated: { type: Date, default: Date.now, optional: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId },
});

export default recipe;
