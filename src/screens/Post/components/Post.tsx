import {useBottomSheet} from 'components/BottomSheet'
import React from 'react'
import {View} from 'react-native'
import {c, l} from 'styles/shared'
import {PostType} from 'types/Properties'
import {BottomSheetPost} from './BottomSheetPost'
import {PostBody} from './PostBody'
import {PostContent} from './PostContent'
import {PostHeader} from './PostHeader'
import {PostReaction} from './PostReaction'

interface Props {
  post: PostType
}

export const Post = React.memo(({post}: Props) => {
  const {showBottomSheet} = useBottomSheet()

  const handleButtonMore = () => {
    showBottomSheet(<BottomSheetPost postId={post.id} userId={post.user_id} />)
  }

  return (
    <View
      style={[
        l.mb10,
        {
          backgroundColor: c.drak,
        },
        l.pt10,
      ]}>
      <PostHeader
        onPressMore={handleButtonMore}
        user={post.user}
        createAt={post.create_at}
        updateAt={post.update_at}
        postTopicHashtag={post.post_topic_hashtag}
      />

      <PostContent content={post.content} />

      <PostBody
        numberOfPhotos={post.post_media.length}
        postMedia={post.post_media}
      />

      <PostReaction postId={post.id} countComment={post.count_comment} />
    </View>
  )
})
