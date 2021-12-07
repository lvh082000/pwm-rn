import {Results} from '@baronha/react-native-multiple-image-picker'
import CircleTouchable from 'components/CircleTouchable'
import {IconType, VectorIcon} from 'components/VectorIcon'
import React from 'react'
import {Image, View} from 'react-native'
import {c} from 'styles/shared'
import styles from './styles'

interface ImageItemProps {
  item: Results
  index: number
  onRemove?: () => void
}

export const SelectedImageItem = React.memo(
  ({item, onRemove}: ImageItemProps) => {
    return (
      <View style={styles.itemContainer}>
        <Image
          resizeMode={'cover'}
          style={styles.image}
          source={{
            uri: `file://${item.path}`,
          }}
        />

        <CircleTouchable
          onPress={onRemove}
          style={styles.removeButton}
          bg={c.red400}
          size={25}>
          <VectorIcon
            color={c.white}
            type={IconType.fontAwesome}
            name="close"
            size={14}
          />
        </CircleTouchable>
      </View>
    )
  },
)
