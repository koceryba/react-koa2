import mongoose from 'mongoose';

const category = mongoose.Schema({
  title: String,
  create: { type: Date, default: Date.now, optional: true },
  updated: { type: Date, default: Date.now, optional: true },
  parentId: { type: mongoose.Schema.Types.ObjectId, default: null, optional: true },
});

export default category;
