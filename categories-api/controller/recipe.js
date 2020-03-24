import recipeModel from '../model/recipe';

class Recipe {
  getOne(id) {
    return recipeModel.getOne(id);
  }

  getList(id) {
    return recipeModel.getList(id);
  }

  create(recipe) {
    return recipeModel.create(recipe);
  }

  edit(id, recipe) {
    return recipeModel.edit(id, recipe);
  }

  remove(id) {
    return recipeModel.remove(id);
  }
}

export default new Recipe();
