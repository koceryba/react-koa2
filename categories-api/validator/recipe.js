import _ from 'lodash';

import validator from '../component/validator';

class Recipe {
  constructor() {
    this.idSchema = {
      id: { type: 'mongoID' }
    };
    this.recipeSchema = {
      title: "string",
      description: "string",
      _id: { type: 'mongoID', optional: true },
      categoryId: { type: 'mongoID'}
    };
  }

  checkId(id) {
    const valid = validator.validate({ id: id }, this.idSchema);
    if (_.isArray(valid) && valid.length) {
      throw valid;
    }
  }

  checkRecipe(data) {
    const valid = validator.validate(data, this.recipeSchema);
    if (_.isArray(valid) && valid.length) {
      throw valid;
    }

    return _.pick(data, ['description', 'title', 'categoryId'])
  }
}

export default new Recipe();
