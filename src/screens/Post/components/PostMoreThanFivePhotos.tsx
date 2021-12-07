import {IconType, VectorIcon} from 'components/VectorIcon'
import React from 'react'
import {Image, TouchableOpacity, View} from 'react-native'
import {c, l} from 'styles/shared'
import {PostMediaType} from 'types/Properties'

interface Props {
  postMedia: PostMediaType[]
}

export const PostMoreThanFivePhotos = React.memo(({postMedia}: Props) => {
  return (
    <View style={[l.mt5, l.flexRow, l.p10, {backgroundColor: c.black800}]}>
      <View style={[l.flex, l.pr5, l.pb30]}>
        <View style={[{height: 150}, l.pb5]}>
          <Image
            source={{
              uri: postMedia[0].media_url,
            }}
            resizeMode="stretch"
            style={[l.fullSize]}
          />
        </View>

        <View style={[{height: 150}, l.pt5]}>
          <Image
            source={{
              uri: postMedia[1].media_url,
            }}
            resizeMode="stretch"
            style={[l.fullSize]}
          />
        </View>
      </View>

      <View style={[l.flex, l.pl5, l.pt30]}>
        <View style={[{height: 100}, l.pb5]}>
          <Image
            source={{
              uri: postMedia[2].media_url,
            }}
            resizeMode="stretch"
            style={[l.fullSize]}
          />
        </View>

        <View style={[{height: 100}, l.py5]}>
          <Image
            source={{
              uri: postMedia[3].media_url,
            }}
            resizeMode="stretch"
            style={[l.fullSize]}
          />
        </View>

        <View style={[{height: 100}, l.pt5]}>
          <Image
            source={{
              uri: postMedia[4].media_url,
            }}
            resizeMode="stretch"
            style={[l.fullSize]}
          />
          <TouchableOpacity
            style={[l.abs, l.fullSize, {top: 5}, l.flexCenter]}
            activeOpacity={0.7}>
            <VectorIcon
              type={IconType.antDesign}
              name="plus"
              size={50}
              color={c.white}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
})
