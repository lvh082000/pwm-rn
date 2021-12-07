import React from 'react'
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import {c, l, t} from 'styles/shared'
import {VectorIcon, VectorIconProps} from '../VectorIcon'
import {ErrorMessage} from './ErrorMessage'

export interface Props {
  placeholder?: string
  value?: string
  onTextChange: Function
  boardType?: 'default' | 'email-address' | 'number-pad'
  secure?: boolean
  widgetStyles?: {
    container?: StyleProp<ViewStyle>
    containerInput?: StyleProp<ViewStyle>
    input?: StyleProp<TextStyle>
  }
  onFocus?: () => void
  maxLength?: number
  error?: string
  touched?: boolean
  leftIcon?: VectorIconProps
  rightIcon?: VectorIconProps
  onPressRightIcon?: () => void
}

const styles = StyleSheet.create({
  sectionInput: {borderRadius: 5, height: 50},
  textInput: {
    ...l.pl10,
    color: c.white,
    fontFamily: t.fontFamily.RobotoSlab.Regular,
  },
})

export const Input = React.memo(
  ({
    placeholder,
    value,
    onTextChange,
    boardType,
    secure,
    widgetStyles,
    onFocus,
    maxLength,
    touched,
    error,
    leftIcon,
    rightIcon,
    onPressRightIcon,
  }: Props) => {
    return (
      <View style={[l.mx20, widgetStyles?.container]}>
        <View
          style={[
            styles.sectionInput,
            {
              backgroundColor: c.black800,
            },
            widgetStyles?.containerInput,
          ]}>
          {leftIcon && (
            <View
              style={[
                l.abs,
                {height: '100%', left: 10},
                l.alignCtr,
                l.justifyCtr,
              ]}>
              <VectorIcon {...leftIcon} />
            </View>
          )}

          <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={text => onTextChange(text)}
            keyboardType={boardType}
            secureTextEntry={secure}
            autoCapitalize="none"
            placeholderTextColor={c.gray}
            numberOfLines={1}
            style={[styles.textInput, widgetStyles?.input]}
            maxLength={maxLength}
            onFocus={onFocus}
          />

          {rightIcon && (
            <TouchableOpacity
              activeOpacity={0.7}
              style={[
                l.abs,
                {height: '100%', right: 10},
                l.alignCtr,
                l.justifyCtr,
              ]}
              onPress={onPressRightIcon}>
              <VectorIcon {...rightIcon} />
            </TouchableOpacity>
          )}
        </View>
        <ErrorMessage touched={touched} error={error} />
      </View>
    )
  },
)
