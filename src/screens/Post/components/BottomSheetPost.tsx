import {useBottomSheet} from 'components/BottomSheet'
import {useDialog} from 'components/Dialog'
import {BottomSheetItem} from 'components/ListItems'
import {useSpinner} from 'components/Spinner'
import {IconType} from 'components/VectorIcon'
import {useAppDispatch, useThunkCallbackAction} from 'hook/useRedux'
import React, {useCallback} from 'react'
import {View} from 'react-native'
import {deletePost, DeletePostPrefix} from 'store/Posts'
import {GetProfile} from 'store/User'
import {c, l} from 'styles/shared'

interface Props {
  postId: number
  userId: number
}

export const BottomSheetPost = React.memo(({postId, userId}: Props) => {
  const {userInfo} = GetProfile()
  const dispatch = useAppDispatch()
  const spinner = useSpinner()
  const dialog = useDialog()
  const {dismissBottomSheet} = useBottomSheet()

  const onDelete = useCallback(() => {
    dispatch(deletePost(postId))
    dismissBottomSheet()
  }, [])

  const onEdit = useCallback(() => {
    dismissBottomSheet()
    dialog.show({
      type: 'Info',
      message: 'Tính năng đang phát tiển?',
      title: 'OK',
    })
  }, [])

  const onDeleteSuccess = useCallback(() => {
    spinner.dismiss()
    dialog.show({
      type: 'Success',
      message: 'Bài viết đã được xóa?',
      title: 'OK',
    })
  }, [])

  const onDedleteLoad = useCallback(() => {
    spinner.show()
  }, [])

  const onError = useCallback(() => {
    spinner.dismiss()
  }, [])

  useThunkCallbackAction(
    DeletePostPrefix,
    onDeleteSuccess,
    onError,
    onDedleteLoad,
  )
  return (
    <View style={[l.mt5, l.px15, l.mb10]}>
      <BottomSheetItem
        icon={{type: IconType.octicons, name: 'report', size: 20}}
        title="Báo cáo..."
        onPress={onEdit}
      />
      <BottomSheetItem
        icon={{
          type: IconType.antDesign,
          name: 'closecircleo',
          size: 20,
        }}
        title="Không quan tâm"
        onPress={onEdit}
      />
      <BottomSheetItem
        icon={{type: IconType.fontAwesome, name: 'copy', size: 20}}
        title="Sao chép liên kết"
        onPress={onEdit}
      />
      <BottomSheetItem
        icon={{type: IconType.antDesign, name: 'sharealt', size: 20}}
        title="Chia sẻ lên..."
        onPress={onEdit}
      />
      {userId === userInfo?.id && (
        <BottomSheetItem
          icon={{
            type: IconType.antDesign,
            name: 'edit',
            size: 20,
          }}
          title="Sửa"
          onPress={onEdit}
        />
      )}
      {userId === userInfo?.id && (
        <BottomSheetItem
          icon={{
            type: IconType.antDesign,
            name: 'delete',
            size: 20,
            color: c.red400,
          }}
          title="Xóa"
          widgetStyles={{textTitle: {color: c.red400}}}
          onPress={onDelete}
        />
      )}
      <BottomSheetItem
        icon={{type: IconType.materialCommunity, name: 'cancel', size: 20}}
        title="Bỏ theo dõi"
        onPress={onEdit}
      />
    </View>
  )
})
