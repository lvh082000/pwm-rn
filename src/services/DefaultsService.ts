import HttpService from 'services/HttpService'
import {GetCategoryResponse} from 'types/Responses/GetCategoryResponse'
import {GetPostChannelResponse} from 'types/Responses/GetPostChannelResponse'
import {GetPostTopicHashtagResponse} from 'types/Responses/GetPostTopicHashtagResponse'
import {GetReactionTypeResponse} from 'types/Responses/GetReactionTypeResponse'
import {GetUserHashtagResponse} from 'types/Responses/GetUserHashtagResponse'

const getDefaults = async () => {
  return await Promise.all([
    getPostChannel(),
    getPostTopicHashtag(),
    getReactionType(),
  ])
}

const getPostChannel = async () => {
  return await HttpService.Get<GetPostChannelResponse>('/default/post-channel')
}

const getPostTopicHashtag = async () => {
  return await HttpService.Get<GetPostTopicHashtagResponse>(
    '/default/post-topic-hashtag',
  )
}

const getReactionType = async () => {
  return await HttpService.Get<GetReactionTypeResponse>(
    '/default/reaction-type',
  )
}

const getUserHashtag = async () => {
  return await HttpService.Get<GetUserHashtagResponse>('/default/user-hashtag')
}

const getCategory = async () => {
  return await HttpService.Get<GetCategoryResponse>('/default/category')
}

export const DefaultsService = {
  getDefaults,

  getPostChannel,
  getPostTopicHashtag,
  getReactionType,
  getUserHashtag,
  getCategory,
}
