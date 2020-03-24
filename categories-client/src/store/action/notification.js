import {NOTIFICATION_ERROR, NOTIFICATION_OFF, NOTIFICATION_SUCCESS, NOTIFICATION_WARNING} from "../const/notification";

export function notificationSuccess(text) {
  return { type: NOTIFICATION_SUCCESS, text }
}

export function notificationWarning(text) {
  return { type: NOTIFICATION_WARNING, text }
}

export function notificationError(text) {
  return { type: NOTIFICATION_ERROR, text }
}

export function notificationOff(recipeList) {
  return { type: NOTIFICATION_OFF, recipeList }
}
