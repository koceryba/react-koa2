import categoryModel from '../model/category';
import recipeModel from '../model/recipe';
import articleModel from '../model/article';

class Breadcrumbs {
  getCategoryList(id) {
    return categoryModel.getBreadcrumbsList(id);
  }

  async getRecipeList(id) {
    let res = [],
      recipe = await recipeModel.getOne(id);
    res = await categoryModel.getBreadcrumbsList(recipe.categoryId);
    await res.push(recipe);
    return res;
  }

  async getArticleList(id) {
    let res = [],
      article = await articleModel.getOne(id);
    res = await categoryModel.getBreadcrumbsList(article.categoryId);
    await res.push(article);
    return res;
  }
}

export default new Breadcrumbs();
