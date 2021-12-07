import {Results} from '@baronha/react-native-multiple-image-picker'
import ImageSelector from 'components/ImageSelector'
import React, {SetStateAction, useCallback} from 'react'
import {View} from 'react-native'
import {l} from 'styles/shared'

interface Props {
  images?: Array<string> | undefined
  setImages: React.Dispatch<SetStateAction<Array<string>>>
}

export const PostImagesUploader = React.memo(({images, setImages}: Props) => {
  const onUpload = useCallback(
    (data: Array<Results>) => {
      const uploadedImages = data.map(v => {
        return v.path
      })
      setImages(uploadedImages)
    },
    [images],
  )

  const onRemove = useCallback(
    (data: Array<Results>) => {
      const resultImages = data.map(v => v.path)
      setImages(resultImages)
    },
    [images],
  )

  return (
    <View style={[l.mx5, l.flexCenter, l.pt30]}>
      <ImageSelector
        images={images}
        type="square"
        onUpload={onUpload}
        onRemove={onRemove}
        max={10}
      />
    </View>
  )
})
