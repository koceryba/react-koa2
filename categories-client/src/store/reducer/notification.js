import {NOTIFICATION_ERROR, NOTIFICATION_OFF, NOTIFICATION_SUCCESS, NOTIFICATION_WARNING} from '../const/notification';

const initialState = {
  type: '',
  notification: ''
};

export default function notification(state = initialState, action) {
  switch (action.type) {
    case NOTIFICATION_SUCCESS:
      return {
        ...state,
        type: 'Success',
        notification: action.text
      };

    case NOTIFICATION_WARNING:
      return {
        ...state,
        type: 'Warning',
        notification: action.text
      };

    case NOTIFICATION_ERROR:
      return {
        ...state,
        type: 'Error',
        notification: action.text
      };

    case NOTIFICATION_OFF:
      return {
        ...state,
        type: '',
        notification: ''
      };

    default:
      return state
  }
}
