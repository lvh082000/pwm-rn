import {createAsyncThunk} from '@reduxjs/toolkit'
import {PostService} from 'services/PostService'
import {CreatePostFormValues} from 'types/Properties'

export const GetPostsPrefix = '@Posts/GetPosts'
export const CreatePostPrefix = '@Posts/CreatePost'
export const DeletePostPrefix = '@Posts/DeletePost'

export const getPosts = createAsyncThunk(GetPostsPrefix, async () => {
  return await PostService.getPosts()
})

export const createPost = createAsyncThunk(
  CreatePostPrefix,
  async (values: CreatePostFormValues) => {
    return await PostService.createPost(values)
  },
)

export const deletePost = createAsyncThunk(
  DeletePostPrefix,
  async (id: number) => {
    return await PostService.deletePost(id)
  },
)
