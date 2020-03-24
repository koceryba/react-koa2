import mongoose from 'mongoose';
import recipe from '../schema/recipe';

class Recipe {
  constructor() {
    this.model = mongoose.model('Recipe', recipe);
  }

  async getOne(id) {
    return await this.model.findById(id, (err, docs) => docs);
  }

  getList(id) {
    return this.model.find({ categoryId: id }).exec();
  }

  async create(recipe) {
    const Model = new this.model(recipe);
    return Model.save();
  }

  async edit(id, recipe) {
    return await this.model.findByIdAndUpdate(id, recipe, { new: true }, (err, result) => result);
  }

  async remove(id) {
    await this.model.findByIdAndDelete(id, (err, docs) => docs);
    return id;
  }

  // async getRecipeIdList(idList) {
  //   let recipeIdList = [];
  //   await Promise.all(idList.map(async id => {
  //     let recipe = await this.model.find({ categoryId: id }, (err, docs) => docs);
  //     console.log('recipe', recipe);
  //     await recipeIdList.push(...recipe);
  //   }));
  //   console.log('recipeIdList1', recipeIdList);
  // }

  async removeRecipeList(idList) {
    // let recipeIdList = await this.getRecipeIdList(idList);
    // await console.log('recipeIdList2', recipeIdList);


    await this.model.deleteMany({
      categoryId: {
        $in: idList
      }
    }, (err, docs) => docs);
    // return  idList.map(async id => {
    //   await this.model.deleteMany({ categoryId: id }, (err, docs) => docs)
    // });
  }
}

export default new Recipe();
