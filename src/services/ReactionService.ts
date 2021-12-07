import HttpService from 'services/HttpService'
import {CreateOrUpdateReactionResponse} from 'types/Responses/CreateOrUpdateReactionResponse'
import {DeleteReactionResponse} from 'types/Responses/DeleteReactionResponse'
import {GetReactionsPostResponse} from 'types/Responses/GetReactionsPostResponse'

const getReactionsPost = async (id: number) => {
  const {data} = await HttpService.Get<GetReactionsPostResponse>(
    `/reaction/${id}/post`,
  )
  return data
}

const createOrUpdateReaction = async (id: number, dfReactionId: number) => {
  return await HttpService.Patch<CreateOrUpdateReactionResponse>(
    `reaction/${id}/post`,
    {
      df_reaction_id: dfReactionId,
    },
  )
}

const deleteReaction = async (id: number) => {
  return await HttpService.Patch<DeleteReactionResponse>(
    `reaction/${id}/post`,
    {},
  )
}

export const ReactionService = {
  getReactionsPost,
  createOrUpdateReaction,
  deleteReaction,
}
