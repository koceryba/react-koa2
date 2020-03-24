import _ from 'lodash';

import validator from '../component/validator';

class Article {
  constructor() {
    this.idSchema = {
      id: { type: 'mongoID' }
    };
    this.articleSchema = {
      title: "string",
      description: "string",
      text: "string",
      _id: { type: 'mongoID', optional: true },
      categoryId: { type: 'mongoID' }
    };
  }

  checkId(id) {
    const valid = validator.validate({ id: id }, this.idSchema);
    if (_.isArray(valid) && valid.length) {
      throw valid;
    }
  }

  checkArticle(data) {
    const valid = validator.validate(data, this.articleSchema);
    if (_.isArray(valid) && valid.length) {
      throw valid;
    }
  }
}

export default new Article();
