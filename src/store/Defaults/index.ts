import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {PostChannelType, PostMediaType, ReactionType} from 'types/Properties'
import {GetPostChannelResponse} from 'types/Responses/GetPostChannelResponse'
import {GetPostTopicHashtagResponse} from 'types/Responses/GetPostTopicHashtagResponse'
import {GetReactionTypeResponse} from 'types/Responses/GetReactionTypeResponse'
import {
  getPostChannel,
  getPostTopicHashtag,
  getReactionType,
} from './ThunkActions'

interface DefaultsStore {
  postChannels: Array<PostChannelType>
  postTopicHashtags: Array<PostMediaType>
  reactionTypes: Array<ReactionType>
}

const initialState: DefaultsStore = {
  postChannels: [],
  postTopicHashtags: [],
  reactionTypes: [],
}

const DefaultsSlice = createSlice({
  name: 'DEFAULTS_SLICE',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      getPostChannel.fulfilled,
      (state, action: PayloadAction<GetPostChannelResponse>) => {
        state.postChannels = action.payload.data
      },
    )
    builder.addCase(
      getPostTopicHashtag.fulfilled,
      (state, action: PayloadAction<GetPostTopicHashtagResponse>) => {
        state.postTopicHashtags = action.payload.data
      },
    )
    builder.addCase(
      getReactionType.fulfilled,
      (state, action: PayloadAction<GetReactionTypeResponse>) => {
        state.reactionTypes = action.payload.data
      },
    )
  },
})

export default DefaultsSlice.reducer

export * from './Selectors'
export * from './ThunkActions'

export const {} = DefaultsSlice.actions
