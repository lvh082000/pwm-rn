import {useDialog} from 'components/Dialog'
import {HeaderApp} from 'components/HeaderApp'
import {useSpinner} from 'components/Spinner'
import {IconType} from 'components/VectorIcon'
import {useAppDispatch, useThunkCallbackAction} from 'hook/useRedux'
import {RootScreenID} from 'navigation/types'
import React, {useCallback, useEffect, useState} from 'react'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import NavigationService from 'services/NavigationService'
import {createPost, CreatePostPrefix} from 'store/Posts'
import {c, l} from 'styles/shared'
import {CreatePostFormValues} from 'types/Properties'
import CreatePostForm from './components/Form'
import {RightComponent} from './components/RightComponent'

const CreatePost = () => {
  const spinner = useSpinner()
  const dialog = useDialog()
  const dispatch = useAppDispatch()
  const [allowPost, setAllowPost] = useState<boolean>(false)

  const [initialValues, setInitialValues] = useState<CreatePostFormValues>({
    content: '',
    listPostTopicHashtagId: [1, 2],
    postChannelDefaultId: 2,
    postChannelUserId: undefined,
    images: [],
  })

  const goBack = useCallback(() => {
    NavigationService.goBack()
  }, [])

  const handleGoBack = useCallback(() => {
    if (initialValues.images.length > 0 || !!initialValues.content) {
      dialog.show({
        type: 'Confirmation',
        message: 'Bạn sẽ bị mất bài viết đang dở?',
        title: 'Xác Nhận',
        onModalConfirm: goBack,
      })
    } else {
      goBack()
    }
  }, [initialValues])

  const onCreateNewPost = async () => {
    dispatch(createPost(initialValues))
  }

  const onCreateNewPostSuccess = useCallback(() => {
    spinner.dismiss()
    setTimeout(() => {
      NavigationService.resetToScreen(RootScreenID.MainDrawer)
    })
    dialog.show({
      type: 'Success',
      message: 'Bài viết đã được tạo?',
      title: 'OK',
    })
  }, [])

  const onCreateNewPostLoad = useCallback(() => {
    spinner.show()
  }, [])

  const onError = useCallback(() => {
    spinner.dismiss()
  }, [])

  useThunkCallbackAction(
    CreatePostPrefix,
    onCreateNewPostSuccess,
    onError,
    onCreateNewPostLoad,
  )

  useEffect(() => {
    if (initialValues.images.length > 0 || !!initialValues.content) {
      setAllowPost(true)
    } else {
      setAllowPost(false)
    }
  }, [initialValues])

  return (
    <KeyboardAwareScrollView
      style={[
        l.flex,
        {
          backgroundColor: c.drak,
        },
      ]}>
      <HeaderApp
        leftIcon={{
          type: IconType.antDesign,
          name: 'arrowleft',
          size: 25,
          color: c.white,
        }}
        title="Tạo bài viết"
        onPressLeftIcon={handleGoBack}
        rightComponent={
          <RightComponent allowPost={allowPost} onPress={onCreateNewPost} />
        }
        widgetStyles={{
          container: [{borderBottomColor: c.gray, borderBottomWidth: 1}],
        }}
      />
      <CreatePostForm
        initialValues={initialValues}
        setInitialValues={setInitialValues}
      />
    </KeyboardAwareScrollView>
  )
}

export default CreatePost
