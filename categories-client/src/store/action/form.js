import {UPDATE_FORM_STATE} from '../const/form';

export const updateFormState = (form, state) => ({
  type: UPDATE_FORM_STATE,
  form,
  payload: state
});

export const getFormState = (state, form) =>
  (state && state.finalForm && state.finalForm[form]) || {};
