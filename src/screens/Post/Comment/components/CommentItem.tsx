import {ImageAvatar} from 'components/Avatar'
import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import {c, l, t} from 'styles/shared'
import {CommentType} from 'types/Properties'
import {VectorIcon, IconType} from 'components/VectorIcon'

interface Props {
  item: CommentType
  onItemPress: (item: CommentType) => void
}

const CommentItem = ({item, onItemPress}: Props) => {
  const onPress = () => {
    onItemPress(item)
  }

  return (
    <>
      <View style={[l.flexRow, l.mb10, l.mx10]}>
        <ImageAvatar uri={item.user.profile_picture_url} size={40} />

        <View
          style={[l.flex, l.ml10, {backgroundColor: c.gray, borderRadius: 5}]}>
          <Text
            style={[
              {
                color: c.white,
                fontFamily: t.fontFamily.RobotoSlab.Bold,
              },
            ]}>
            {item.user.name}
          </Text>
          <Text
            style={[
              {
                color: c.white,
                fontFamily: t.fontFamily.RobotoSlab.Light,
              },
            ]}>
            {item.content}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={[l.abs, {right: 15, top: -5}]}
        activeOpacity={0.7}
        onPress={() => {}}>
        <VectorIcon
          type={IconType.entypo}
          name={'dots-three-horizontal'}
          color={c.white}
          size={25}
        />
      </TouchableOpacity>
    </>
  )
}

export default React.memo(CommentItem)
