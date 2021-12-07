import React from 'react'
import {View} from 'react-native'
import {c, l} from 'styles/shared'
import {PostType} from 'types/Properties'
import {Post} from './Post'

interface Props {
  posts: PostType[]
}

export const ListPost = React.memo(({posts}: Props) => {
  return (
    <View style={[l.flex, {backgroundColor: c.black800}]}>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </View>
  )
})
