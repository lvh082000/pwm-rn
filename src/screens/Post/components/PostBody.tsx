import React from 'react'
import {PostFivePhotos} from './PostFivePhotos'
import {PostFourPhotos} from './PostFourPhotos'
import {PostMoreThanFivePhotos} from './PostMoreThanFivePhotos'
import {PostOnePhotos} from './PostOnePhotos'
import {PostThreePhotos} from './PostThreePhotos'
import {PostTwoPhotos} from './PostTwoPhotos'
import {PostMediaType} from 'types/Properties'

interface Props {
  numberOfPhotos?: number
  postMedia: PostMediaType[]
}

export const PostBody = React.memo(({numberOfPhotos, postMedia}: Props) => {
  return (
    <>
      {postMedia.length === 1 && <PostOnePhotos postMedia={postMedia} />}
      {postMedia.length === 2 && <PostTwoPhotos postMedia={postMedia} />}
      {postMedia.length === 3 && <PostThreePhotos postMedia={postMedia} />}
      {postMedia.length === 4 && <PostFourPhotos postMedia={postMedia} />}
      {postMedia.length === 5 && <PostFivePhotos postMedia={postMedia} />}
      {(numberOfPhotos as number) > 5 && (
        <PostMoreThanFivePhotos postMedia={postMedia} />
      )}
    </>
  )
})
