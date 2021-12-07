import HttpService from 'services/HttpService'
import {CreatePostFormValues} from 'types/Properties'
import {CreatePostResponse} from 'types/Responses/CreatePostResponse'
import {DeletePostResponse} from 'types/Responses/DeletePostResponse'
import {GetPostsResponse} from 'types/Responses/GetPostsResponse'

const getPosts = async () => {
  return await HttpService.Get<GetPostsResponse>('post')
}

const createPost = async (values: CreatePostFormValues) => {
  const formData = new FormData()
  formData.append('content', values.content)
  formData.append('post_channel_default_id', values.postChannelDefaultId)
  // formData.append('post_channel_user_id', values.postChannelUserId)
  values.listPostTopicHashtagId?.forEach((v: number) =>
    formData.append('list_post_topic_hashtag_id', v),
  )
  values.images?.forEach((v: string) =>
    formData.append('post_media', {
      name: `images${new Date().getTime()}.png`,
      type: 'image/png',
      uri: v,
    }),
  )
  return await HttpService.Post<CreatePostResponse>('post', formData)
}

const deletePost = async (id: number) => {
  return await HttpService.Delete<DeletePostResponse>(`post/${id}`)
}

export const PostService = {
  getPosts,
  createPost,
  deletePost,
}
