import {c, l, t} from 'styles/shared'
import React from 'react'
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

type ButtonType = 'gradient-button' | 'button'
type ButtonSize = 'sm' | 'md' | 'lg'
type ButtonVariants =
  | 'primary'
  | 'primaryOutline'
  | 'secondary'
  | 'secondaryOutline'
  | 'simplePrimary'
  | 'simpleSecondary'

export interface Props {
  type?: ButtonType
  variant?: ButtonVariants
  size?: ButtonSize
  widgetStyles?: {
    container?: StyleProp<ViewStyle>
    textTitle?: StyleProp<TextStyle>
  }
  onPress?: () => void
  title?: string
}

const styles = StyleSheet.create({
  buttonOutline: {
    ...l.mx20,
    ...l.py15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: c.green300,
    backgroundColor: c.drak,
  },
  title: {
    color: c.white,
    fontFamily: t.fontFamily.RobotoSlab.Bold,
  },
})

export const Button = React.memo(
  ({type, variant, size, widgetStyles, onPress = () => {}, title}: Props) => {
    return (
      <>
        {type === 'gradient-button' ? (
          <TouchableOpacity
            onPress={() => onPress()}
            style={[l.fullWidth, l.px20, widgetStyles?.container]}>
            <LinearGradient
              style={[{borderRadius: 5}, l.py15]}
              colors={[c.green300, c.green100]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Text style={[styles.title, t.textCtr]}>{title}</Text>
            </LinearGradient>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => onPress()}
            style={[styles.buttonOutline, widgetStyles?.container]}>
            <Text style={[styles.title, t.textCtr, widgetStyles?.textTitle]}>
              {title}
            </Text>
          </TouchableOpacity>
        )}
      </>
    )
  },
)
