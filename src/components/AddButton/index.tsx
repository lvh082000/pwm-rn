import {IconType, VectorIcon} from '../VectorIcon'
import {c, l} from 'styles/shared'
import React from 'react'
import {StyleSheet, TouchableOpacity} from 'react-native'

const SIZE = 50

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    ...l.flexCenter,
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: c.green300,
  },
})

interface Props {
  onPress: () => void
}

const AddButton = React.memo(({onPress}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.container]}>
      <VectorIcon
        size={25}
        type={IconType.fontAwesome}
        name={'plus'}
        color={c.white}
      />
    </TouchableOpacity>
  )
})

export {AddButton}
