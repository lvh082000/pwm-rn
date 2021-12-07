import {VectorIcon, VectorIconProps} from 'components/VectorIcon'
import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {c, l, t} from 'styles/shared'

export type OptionItemType = {
  id: number
  title: string
  link?: string
  icon: VectorIconProps
  screen?: string | undefined
}

interface Props {
  onPress?: (link: string | undefined, screen: string | undefined) => void
  item: OptionItemType
}

const DrawerOption = ({onPress, item}: Props) => {
  const onItem = () => {
    onPress?.(item.link ?? undefined, item.screen)
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onItem}>
      <View style={styles.boxIcon}>
        <VectorIcon {...item.icon} />
      </View>
      <Text style={[styles.textTitle, {color: c.white}]}>{item.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    ...l.flexRow,
    ...l.alignCtr,
    ...l.pl10,
    ...l.py10,
  },
  boxIcon: {
    ...l.alignCtr,
    width: 30,
  },
  textTitle: {
    ...l.pl10,
    ...t.h5,
    fontFamily: t.fontFamily.RobotoSlab.Medium,
  },
})

export {DrawerOption}
