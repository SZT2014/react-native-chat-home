import moment from 'moment'
import { IMessage } from './types'

export function isSameDay(
  currentMessage: any,
  diffMessage: any,
) {
  if (!diffMessage || !diffMessage.createAt) {
    return false
  }

  const currentCreatedAt = moment(currentMessage.createAt)
  const diffCreatedAt = moment(diffMessage.createAt)

  if (!currentCreatedAt.isValid() || !diffCreatedAt.isValid()) {
    return false
  }

  return currentCreatedAt.isSame(diffCreatedAt, 'day')
}
export function isSameMinute(currentMessage: any, diffMessage: any) {
  if (!diffMessage || !diffMessage.createAt) {
    return false;
  }
  const currentCreatedAt = moment(currentMessage.createAt);
  const diffCreatedAt = moment(diffMessage.createAt);
  if (!currentCreatedAt.isValid() || !diffCreatedAt.isValid()) {
    return false;
  }
  return currentCreatedAt.isSame(diffCreatedAt, 'minute');
}
// return !!(
//   diffMessage &&
//   diffMessage.user &&
//   currentMessage.user &&
//   diffMessage.user._id === currentMessage.user._id
// )
export function isSameUser(
  currentMessage: any,
  diffMessage: any,
) {
  return !!(diffMessage &&
    diffMessage.fromId === currentMessage.fromId);
}

const styleString = (color: string) => `color: ${color}; font-weight: bold`

const headerLog = '%c[react-native-gifted-chat]'

export const warning = (...args: any) =>
  console.log(headerLog, styleString('orange'), ...args)

export const error = (...args: any) =>
  console.log(headerLog, styleString('red'), ...args)
