import _ from 'lodash';

import validator from '../component/validator';

class Category {
  constructor() {
    this.idSchema = {
      id: { type: 'mongoID' }
    };
    this.categorySchema = {
      title: "string",
      _id: { type: 'mongoID', optional: true },
      parentId: { type: 'mongoID', optional: true }
    };
  }
  checkId(id) {
    const valid = validator.validate({ id: id }, this.idSchema);
    if (_.isArray(valid) && valid.length) {
      throw valid;
    }
  }

  checkCategory(data) {
    const valid = validator.validate(data, this.categorySchema);
    if (_.isArray(valid) && valid.length) {
      throw valid;
    }
  }
}

export default new Category();
