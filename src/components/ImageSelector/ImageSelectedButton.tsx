import {IconType, VectorIcon} from 'components/VectorIcon'
import React from 'react'
import {StyleProp, ViewStyle} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import styles from './styles'
import {c, t, l} from 'styles/shared'

interface Props {
  type?: 'square' | 'circle'
  style?: StyleProp<ViewStyle>
  onPress: () => void
}

export const ImageSelectedButton = React.memo(
  ({type, style, onPress}: Props) => {
    return (
      <TouchableOpacity
        style={[
          styles.selectorContainer,
          type === 'circle' ? styles.circleContainer : styles.squareContainer,
        ]}
        onPress={onPress}
        activeOpacity={0.7}>
        <VectorIcon
          size={50}
          type={IconType.materialCommunity}
          name={'camera-plus-outline'}
          color={c.green300}
        />
      </TouchableOpacity>
    )
  },
)
