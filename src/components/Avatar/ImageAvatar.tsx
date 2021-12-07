import React from 'react'
import {Image} from 'react-native'

interface Props {
  uri: string
  size: number
}

export const ImageAvatar = React.memo(({uri, size}: Props) => {
  return (
    <Image
      source={{uri: uri}}
      style={{width: size, height: size, borderRadius: size / 2}}
      resizeMode="cover"
    />
  )
})
