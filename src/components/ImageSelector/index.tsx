import MultipleImagePicker, {
  Results,
} from '@baronha/react-native-multiple-image-picker'
import DeviceHelper from 'config/DeviceHelper'
import React, {useCallback, useMemo, useState} from 'react'
import {StyleProp, View, ViewStyle} from 'react-native'
import {c, l} from 'styles/shared'
import {ImageSelectedButton} from './ImageSelectedButton'
import {SelectedImageItem} from './SelectedImageItem'

interface Props {
  images?: Array<string> | undefined
  type?: 'square' | 'circle'
  max?: number
  style?: StyleProp<ViewStyle>
  onUpload?: (images: Array<Results>) => void
  onRemove?: (images: Array<Results>) => void
}

const ImageSelector = React.memo(
  ({onUpload, onRemove, type, max = 1, style, images}: Props) => {
    const initialImages = useMemo(() => {
      if (!images || (images && images.length === 0)) {
        return []
      }
      return images
        .filter(v => v.startsWith('http'))
        .map(v => {
          return {
            path: v,
          }
        })
    }, [images])
    const [selectedImages, setSelectedImages] = useState<Array<Results>>(
      initialImages as Array<Results>,
    )

    const openPicker = async (maxSelectedAssets?: number) => {
      try {
        const images = await MultipleImagePicker.openPicker({
          mediaType: 'image',
          doneTitle: 'Tiếp tục',
          cancelTitle: 'Hủy',
          emptyMessage: 'Không có hình ảnh',
          messageTitleButton: 'Đóng',
          maximumMessageTitle: 'Thông báo',
          maximumMessage: `Bạn chỉ được chọn tối đa ${max} hình ảnh`,
          maxSelectedAssets: maxSelectedAssets ?? max,
          selectedColor: c.green300,
        })
        const data = images.map((v: Results) => {
          return {
            ...v,
            path: DeviceHelper.isIOS
              ? v.path.replace('file://', '')
              : //@ts-ignore
                `file://${v.realPath}`,
            //@ts-ignore
            filename: DeviceHelper.isIOS ? v.filename : v.fileName,
          }
        })
        setSelectedImages([...selectedImages, ...data])
        onUpload?.(data)
      } catch (error) {
        console.log('[ERROR] onUpload', error)
      }
    }

    const onRemoveItem = useCallback(
      (index: number) => {
        const data = selectedImages.filter((_, i) => i !== index)
        setSelectedImages(data)
        onRemove?.(data)
      },
      [selectedImages, onRemove],
    )

    const renderImage = (item: Results, index: number) => {
      return (
        <SelectedImageItem
          onRemove={() => onRemoveItem(index)}
          key={index}
          index={index}
          item={item}
        />
      )
    }

    return (
      <>
        {selectedImages.length === 0 && (
          <ImageSelectedButton onPress={() => openPicker()} />
        )}

        {max === 1 && selectedImages.length > 0 && (
          <SelectedImageItem
            onRemove={() => onRemoveItem(0)}
            index={0}
            item={selectedImages[0]}
          />
        )}

        {max > 1 && selectedImages.length === 1 && (
          <View style={[l.flexRow]}>
            {selectedImages.map(renderImage)}
            <ImageSelectedButton
              onPress={() => openPicker(max - selectedImages.length)}
              style={[style, l.ml5]}
            />
          </View>
        )}

        {max > 1 && selectedImages.length > 1 && (
          <View style={[l.flexRow]}>
            <SelectedImageItem
              onRemove={() => onRemoveItem(0)}
              index={0}
              item={selectedImages[0]}
            />
            <SelectedImageItem
              onRemove={() => onRemoveItem(1)}
              index={1}
              item={selectedImages[1]}
            />
          </View>
        )}
      </>
    )
  },
)

export default ImageSelector
