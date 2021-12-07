import {NonAvatar} from 'components/Avatar'
import {IconType, VectorIcon, VectorIconProps} from 'components/VectorIcon'
import React, {useState} from 'react'
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import NavigationService from 'services/NavigationService'
import {GetProfile} from 'store/User'
import {c, l, t} from 'styles/shared'
import {Input} from '../FormControls/Input'

export interface Props {
  widgetStyles?: {
    container?: StyleProp<ViewStyle>
  }
  typeLeft?: string
  onPressLeftIcon?: () => void
  leftIcon?: VectorIconProps
  typeMid?: string
  onFocus?: () => void
  onTitlePress?: () => void
  title?: string
  rightComponent?: JSX.Element
}

const styles = StyleSheet.create({
  container: {
    ...l.fullWidth,
    ...l.flexRow,
    ...l.alignCtr,
    ...l.pt5,
    ...l.pb10,
    height: 55,
  },
  sectionLeft: {
    ...l.fullHeight,
    ...l.px10,
    ...l.justifyCtr,
    width: 60,
  },
  buttonAvatar: {
    ...l.fullSize,
    borderRadius: 20,
  },
  textTitle: {
    ...t.h3,
    fontFamily: t.fontFamily.RobotoSlab.Medium,
  },
  sectionRight: {
    ...l.fullHeight,
    ...l.px10,
    ...l.flexCenter,
    width: 50,
  },
})

export const HeaderApp = React.memo(
  ({
    widgetStyles,
    typeLeft,
    onPressLeftIcon,
    leftIcon,
    typeMid,
    onFocus,
    onTitlePress,
    title,
    rightComponent,
  }: Props) => {
    const {userInfo} = GetProfile()
    const [textSearch, setTextSearch] = useState<string>('')

    const openDrawer = () => {
      NavigationService.openDrawer()
    }

    const renderRightComponent = () => {
      if (rightComponent) {
        return rightComponent
      }
      return null
    }

    return (
      <View
        style={[
          styles.container,
          widgetStyles?.container,
          {
            backgroundColor: c.drak,
          },
        ]}>
        {typeLeft === 'avatar' && (
          <TouchableOpacity
            style={styles.sectionLeft}
            onPress={openDrawer}
            activeOpacity={0.7}>
            <NonAvatar name={userInfo?.name as string} type="circle" />
          </TouchableOpacity>
        )}

        {leftIcon && (
          <TouchableOpacity
            onPress={onPressLeftIcon}
            style={styles.sectionLeft}
            activeOpacity={0.7}>
            <VectorIcon {...leftIcon} />
          </TouchableOpacity>
        )}

        {typeMid === 'search' ? (
          <Input
            widgetStyles={{
              container: [l.flex, l.mx0, l.mr10],
              containerInput: [{height: 40}],
              input: [l.pl40, {color: c.white}],
            }}
            placeholder={'Tìm kiếm'}
            value={textSearch}
            onTextChange={setTextSearch}
            onFocus={onFocus}
            leftIcon={{
              type: IconType.antDesign,
              name: 'search1',
              size: 20,
              color: c.white,
            }}
          />
        ) : (
          <Text
            style={[l.pl10, l.flex, styles.textTitle, {color: c.white}]}
            onPress={onTitlePress}>
            {title}
          </Text>
        )}

        {renderRightComponent()}
      </View>
    )
  },
)
