import React from 'react'
import {Image, View} from 'react-native'
import {c, l} from 'styles/shared'
import {PostMediaType} from 'types/Properties'

interface Props {
  postMedia: PostMediaType[]
}

export const PostOnePhotos = React.memo(({postMedia}: Props) => {
  return (
    <View
      style={[l.mt5, l.flexRow, {backgroundColor: c.black800, height: 300}]}>
      <Image
        source={{
          uri: postMedia[0].media_url,
        }}
        style={[l.fullSize]}
        resizeMode="stretch"
      />
    </View>
  )
})
