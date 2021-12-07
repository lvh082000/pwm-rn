import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {PostType} from 'types/Properties'
import {CreatePostResponse} from 'types/Responses/CreatePostResponse'
import {DeletePostResponse} from 'types/Responses/DeletePostResponse'
import {GetPostsResponse} from 'types/Responses/GetPostsResponse'
import {createPost, deletePost, getPosts} from './ThunkActions'

interface PostStore {
  posts: PostType[]
}

const initialState: PostStore = {
  posts: [],
}

const PostSlice = createSlice({
  name: 'POST_SLICE',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // CRUD post
    builder.addCase(
      getPosts.fulfilled,
      (state, action: PayloadAction<GetPostsResponse>) => {
        state.posts = action.payload.data
      },
    )
    builder.addCase(
      createPost.fulfilled,
      (state, action: PayloadAction<CreatePostResponse>) => {
        state.posts = action.payload.data
      },
    )
    builder.addCase(
      deletePost.fulfilled,
      (state, action: PayloadAction<DeletePostResponse>) => {
        state.posts = state.posts.filter(v => v.id !== action.payload.data.id)
      },
    )
  },
})

export default PostSlice.reducer

export * from './Selectors'
export * from './ThunkActions'

// export const {} = PostSlice.actions
