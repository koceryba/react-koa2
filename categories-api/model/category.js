import mongoose from 'mongoose';
import category from '../schema/category';

class Category {
  constructor() {
    this.model = mongoose.model('Category', category);
    this.categoryList = {};
  }

  async init() {
    let list = await this.model.find({}, (err, docs) => docs);
    list.map(category => {
      this.categoryList[category._id] = category;
    });
  }

  async getAll() {
    await this.init();
    return Object.values(this.categoryList);
  }

  async getOne(id) {
    return this.categoryList[id];
  }

  async create(category) {
    const Model = new this.model(category);
    this.categoryList[Model._id] = Model;
    return await Model.save();
  }

  async edit(id, category) {
    return await this.model.findByIdAndUpdate(id, category, { new: true }, (err, result) => result);
  }

  async removeCategoryList(idList) {
    await idList.map(id => {
      this.model.findByIdAndDelete(id, (err, docs) => docs);
    });
    await idList.map(id => {
      delete this.categoryList[id];
    })
  }

  async getIdList(id) {
    const categoryList = await this.model.find({parentId: id}, (err, docs) => docs);
    return categoryList.map(category => category._id);
  }

  async getAllIdList(id) {
    let allId = [];
    let idList = [id];
    while (idList.length > 0) {
      allId = [ ...allId, ...idList ];
      idList = await this.getIdList(idList);
    }
    return allId;
  }

  async getCategory(id) {
    return await this.model.findById(id, (err, docs) => docs);
  }

  async getBreadcrumbsList(id) {
    let resList = [];
    resList.push(await this.getCategory(id));
    while (resList[resList.length-1].parentId) {
      resList.push(await this.getCategory(resList[resList.length-1].parentId));
    }
    resList.reverse();
    return resList;
  }
}

export default new Category();
