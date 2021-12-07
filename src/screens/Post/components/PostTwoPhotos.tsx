import React from 'react'
import {Image, View} from 'react-native'
import {c, l} from 'styles/shared'
import {PostMediaType} from 'types/Properties'

interface Props {
  postMedia: PostMediaType[]
}

export const PostTwoPhotos = React.memo(({postMedia}: Props) => {
  return (
    <View
      style={[
        l.mt5,
        l.flexRow,
        l.p10,
        {backgroundColor: c.black800, height: 200},
      ]}>
      <View style={[l.flex, l.pr5]}>
        <Image
          source={{
            uri: postMedia[0].media_url,
          }}
          resizeMode="stretch"
          style={[l.fullSize]}
        />
      </View>

      <View style={[l.flex, l.pl5]}>
        <Image
          source={{
            uri: postMedia[1].media_url,
          }}
          resizeMode="stretch"
          style={[l.fullSize]}
        />
      </View>
    </View>
  )
})
