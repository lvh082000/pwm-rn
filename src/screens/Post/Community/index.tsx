import {AddButton} from 'components/AddButton'
import LoadingView from 'components/LoadingView'
import NoDataView from 'components/NoDataView'
import {
  useAppDispatch,
  useAppSelector,
  useThunkStatusAction,
} from 'hook/useRedux'
import {RootScreenID} from 'navigation/types'
import React, {useEffect} from 'react'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import NavigationService from 'services/NavigationService'
import {getPosts, GetPostsPrefix, PostsSelector} from 'store/Posts'
import {c, l} from 'styles/shared'

const Community = () => {
  const posts = useAppSelector(PostsSelector())
  const {isLoading} = useThunkStatusAction(GetPostsPrefix)
  const dispatch = useAppDispatch()
  // const postsOfCommunity = posts?.filter(e => e.post_channel_default_id === 2)

  const navigationCreatePost = () => {
    NavigationService.pushToScreen(RootScreenID.CreatePost)
  }

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  const renderContent = () => {
    if (isLoading) {
      return <LoadingView />
    }

    if (posts && posts.length > 0) {
      return (
        <KeyboardAwareScrollView
          style={[
            l.flex,
            {
              backgroundColor: c.drak,
            },
          ]}>
          {/* <ListPost posts={posts} /> */}
        </KeyboardAwareScrollView>
      )
    }
    if (posts.length === 0) {
      return <NoDataView title="Không có dữ liệu" />
    }
  }
  return (
    <>
      {renderContent()}
      <AddButton onPress={navigationCreatePost} />
    </>
  )
}

export default Community
