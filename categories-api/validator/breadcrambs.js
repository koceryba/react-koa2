import _ from 'lodash';

import validator from '../component/validator';

class Breadcrambs {
  constructor() {
    this.idSchema = {
      id: { type: 'mongoID' }
    };
  }
  checkId(id) {
    const valid = validator.validate({ id: id }, this.idSchema);
    if (_.isArray(valid) && valid.length) {
      throw valid;
    }
  }
}

export default new Breadcrambs();
