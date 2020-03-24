import Validator from 'fastest-validator';

let validator = new Validator({
  messages: {
    mongoID: "The '{field}' not mongoID"
  }
});

validator.add('mongoID', (_id) => {
  const mongoose = require('mongoose');
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return validator.makeError('invalidField', 'mongoose.Types.ObjectId', _id);
  }
  return true;
});

export default validator;
