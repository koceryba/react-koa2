import mongoose from 'mongoose';
import article from '../schema/article';

class Article {
  constructor() {
    this.model = mongoose.model('Article', article);
  }

  async getOne(id) {
    return await this.model.findById(id, (err, docs) => docs);
  }

  async getList(id) {
    return await this.model.find({ categoryId: id }, (err, docs) => docs);
  }

  async create(recipe) {
    const Model = new this.model(recipe);
    const res = await Model.save();
    return res;
  }

  async edit(id, recipe) {
    return await this.model.findByIdAndUpdate(id, recipe, { new: true }, (err, result) => result);
  }

  async remove(id) {
    await this.model.findByIdAndDelete(id, (err, docs) => docs);
    return id;
  }

  async removeArticleList(idList) {
    return  idList.map(async id => {
      await this.model.deleteMany({ categoryId: id }, (err, docs) => docs)
    });
  }
}

export default new Article();