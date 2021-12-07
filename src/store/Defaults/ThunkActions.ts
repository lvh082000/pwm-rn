import {createAsyncThunk} from '@reduxjs/toolkit'
import {DefaultsService} from 'services/DefaultsService'

export const GetDefaultsPrefix = '@Defaults/GetDefaults'
export const GetPostChannelPrefix = '@Defaults/GetPostChannel'
export const GetPostTopicHashtagPrefix = '@Defaults/GetPostTopicHashtag'
export const GetReactionTypePrefix = '@Defaults/GetReactionType'
export const GetUserHashtagPrefix = '@Defaults/GetUserHashtag'
export const GetCategoryPrefix = '@Defaults/GetCategory'

export const getDefaults = createAsyncThunk(GetDefaultsPrefix, async () => {
  return await DefaultsService.getDefaults()
})

export const getPostChannel = createAsyncThunk(
  GetPostChannelPrefix,
  async () => {
    return await DefaultsService.getPostChannel()
  },
)

export const getPostTopicHashtag = createAsyncThunk(
  GetPostTopicHashtagPrefix,
  async () => {
    return await DefaultsService.getPostTopicHashtag()
  },
)

export const getReactionType = createAsyncThunk(
  GetReactionTypePrefix,
  async () => {
    return await DefaultsService.getReactionType()
  },
)

export const getUserHashtag = createAsyncThunk(
  GetUserHashtagPrefix,
  async () => {
    return await DefaultsService.getUserHashtag()
  },
)

export const getCategory = createAsyncThunk(GetCategoryPrefix, async () => {
  return await DefaultsService.getCategory()
})
