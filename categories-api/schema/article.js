import mongoose from 'mongoose';

const article = mongoose.Schema({
  title: String,
  description: String,
  text: String,
  create: { type: Date, default: Date.now, optional: true },
  updated: { type: Date, default: Date.now, optional: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId },
});

export default article;
