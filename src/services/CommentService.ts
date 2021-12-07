import HttpService from 'services/HttpService'
import {GetCommetPostResponse} from 'types/Responses/GetCommetPostResponse'
import {CreateCommentFormValues} from 'types/Properties'
import {CreateCommentResponse} from 'types/Responses/CreateCommentResponse'

const getCommentPost = async (id: number) => {
  const {data} = await HttpService.Get<GetCommetPostResponse>(
    `/comment/${id}/post`,
  )
  return data
}

const createComment = async (values: CreateCommentFormValues) => {
  const formData = new FormData()
  formData.append('post_id', values.postId)
  formData.append('content', values.content)
  await HttpService.Post<CreateCommentResponse>('comment', formData)
}

const deleteComment = async (id: number) => {
  return await HttpService.Delete<any>(`comment/${id}`)
}

export const CommentService = {
  getCommentPost,
  createComment,
  deleteComment,
}
