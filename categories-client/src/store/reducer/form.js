import {UPDATE_FORM_STATE} from '../const/form';

export default function form(state = {}, action = {}) {
  switch (action.type) {
    case UPDATE_FORM_STATE:
      return {
        ...state,
        [action.form]: action.payload
      };
    default:
      return state
  }
}
