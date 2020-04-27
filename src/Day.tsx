import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import {
  StyleSheet,
  Text,
  View,

  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native'
import moment from 'moment'

import Color from './Color'

import { isSameDay, isSameMinute } from './utils'
import { DATE_FORMAT } from './Constant'
import { IMessage } from './types'

const commonStyles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
});
const styles = {
  left: StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      marginTop: 5,
      marginBottom: 10,
    },
    wrapper: {
      justifyContent: 'flex-end',
    },
  }),
  right: StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-end',
      marginTop: 5,
      marginBottom: 10,
    },
    wrapper: {
      justifyContent: 'flex-end',
    },
  }),
  content: StyleSheet.create({
    text: {
      backgroundColor: Color.backgroundTransparent,
      color: Color.defaultColor,
      fontSize: 12,
      fontWeight: '600',
    },
  })
}

export interface DayProps<TMessage extends IMessage> {
  currentMessage?: TMessage
  nextMessage?: TMessage
  previousMessage?: TMessage
  containerStyle?: StyleProp<ViewStyle>
  wrapperStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  dateFormat?: string
  inverted?: boolean
}

export default class Day<
  TMessage extends IMessage = IMessage
> extends PureComponent<DayProps<TMessage>> {
  static contextTypes = {
    getLocale: PropTypes.func,
  }

  static defaultProps = {
    currentMessage: {
      // TODO: test if crash when createdAt === null
      createdAt: null,
    },
    previousMessage: {},
    nextMessage: {},
    containerStyle: {},
    wrapperStyle: {},
    textStyle: {},
    dateFormat: DATE_FORMAT,
    position: 'left',
  }

  static propTypes = {
    currentMessage: PropTypes.object,
    previousMessage: PropTypes.object,
    nextMessage: PropTypes.object,
    inverted: PropTypes.bool,
    containerStyle: {},
    wrapperStyle: {},
    textStyle: PropTypes.any,
    dateFormat: PropTypes.string,
    position: PropTypes.oneOf(['left', 'right']),
  }
  render() {
    const {
      dateFormat,
      currentMessage,
      previousMessage,
      containerStyle,
      wrapperStyle,
      textStyle,
      position
    } = this.props

    if (currentMessage && !isSameMinute(currentMessage, previousMessage!)) {
      return (
        <View style={[styles.container, containerStyle && containerStyle[position]]}>
          <View style={[
            styles[position].wrapper,
            wrapperStyle && wrapperStyle[position]]
          }>
            <Text style={[styles.content.text, textStyle]}>
              {moment(currentMessage.createAt)
                .locale(this.context.getLocale())
                .format(dateFormat)}
            </Text>
          </View>
        </View>
      )
    }
    return null
  }
}
