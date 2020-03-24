import articleModel from '../model/article';

class Article {
  getOne(id) {
    return articleModel.getOne(id);
  }

  getList(id) {
    return articleModel.getList(id);
  }

  create(recipe) {
    return articleModel.create(recipe);
  }

  edit(id, recipe) {
    return articleModel.edit(id, recipe);
  }

  remove(id) {
    return articleModel.remove(id);
  }
}

export default new Article();
