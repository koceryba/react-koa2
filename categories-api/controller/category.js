import categoryModel from '../model/category';
import recipeModel from '../model/recipe';
import articleModel from '../model/article';

class Category {
  getAll() {
    return categoryModel.getAll();
  }

  getOne(id) {
    return categoryModel.getOne(id);
  }

  create(category) {
    return categoryModel.create(category);
  }

  edit(id, category) {
    return categoryModel.edit(id, category);
  }

  async remove(id) {
    let categoryList = [];
    categoryList = await categoryModel.getAllIdList(id);
    console.log('categoryList', categoryList);
    await recipeModel.removeRecipeList(categoryList);
    await articleModel.removeArticleList(categoryList);
    await categoryModel.removeCategoryList(categoryList);
    return categoryList;
  }
}

export default new Category();
