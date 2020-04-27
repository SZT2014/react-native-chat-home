import { StyleProp, ViewStyle } from 'react-native'

export { ActionsProps } from './Actions'
export { AvatarProps } from './Avatar'
export {
  BubbleProps,
  RenderMessageImageProps,
  RenderMessageVideoProps,
  RenderMessageTextProps,
} from './Bubble'
export { ComposerProps } from './Composer'
export { DayProps } from './Day'
export { GiftedAvatarProps } from './GiftedAvatar'
export { InputToolbarProps } from './InputToolbar'
export { LoadEarlierProps } from './LoadEarlier'
export { MessageProps } from './Message'
export { MessageContainerProps } from './MessageContainer'
export { MessageImageProps } from './MessageImage'
export { MessageTextProps } from './MessageText'
export { QuickRepliesProps } from './QuickReplies'
export { SendProps } from './Send'
export { SystemMessageProps } from './SystemMessage'
export { TimeProps } from './Time'

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

export interface LeftRightStyle<T> {
  left: StyleProp<T>
  right: StyleProp<T>
}
type renderFunction = (x: any) => JSX.Element
export interface User {
  fromId: string | number
  name?: string
  avatar?: string | renderFunction
}

export interface Reply {
  title: string
  value: string
  messageId?: any
}

export interface QuickReplies {
  type: 'radio' | 'checkbox'
  values: Reply[]
  keepIt?: boolean
}

export interface IMessage {
  fromId: string | number
  targetId: string | number
  msgType: string
  targetType: string
  text: string
  createAt: Date | number
  id: string
  unread: boolean
  isShowLeft: boolean
  user: User
  image?: string
  video?: string
  audio?: string
  system?: boolean
  sent?: boolean
  received?: boolean
  pending?: boolean
  quickReplies?: QuickReplies
}

export type IChatMessage = IMessage

export interface MessageVideoProps<TMessage extends IMessage> {
  currentMessage?: TMessage
  containerStyle?: StyleProp<ViewStyle>
  videoStyle?: StyleProp<ViewStyle>
  videoProps?: object
  // TODO: should be LightBox properties
  lightboxProps?: object
}
