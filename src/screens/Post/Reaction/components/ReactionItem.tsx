import {ImageAvatar} from 'components/Avatar'
import React from 'react'
import {Text, View} from 'react-native'
import {c, l, t} from 'styles/shared'
import {ReactionType} from 'types/Properties'

interface Props {
  item: ReactionType
  onItemPress: (item: ReactionType) => void
}

const ReactionItem = ({item, onItemPress}: Props) => {
  const onPress = () => {
    onItemPress(item)
  }

  return (
    <View style={[l.flexRow, l.mb10, l.mx10]}>
      <ImageAvatar uri={item.user.profile_picture_url} size={40} />
      <View style={[l.flex, l.ml10, l.justifyCtr]}>
        <Text
          style={[
            {
              color: c.white,
              fontFamily: t.fontFamily.RobotoSlab.Bold,
            },
          ]}>
          {item.user.name}
        </Text>
      </View>
    </View>
  )
}

export default React.memo(ReactionItem)
