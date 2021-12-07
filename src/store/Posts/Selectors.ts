import {createDraftSafeSelector} from '@reduxjs/toolkit'
import {RootState} from 'store'

const selectSelf = (state: RootState) => state

export const PostsSelector = () =>
  createDraftSafeSelector(selectSelf, state => {
    return state.posts.posts
  })
