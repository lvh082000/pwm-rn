export interface CreatePostFormValues {
  content: string
  listPostTopicHashtagId: Array<number>
  postChannelDefaultId?: number
  postChannelUserId: number | undefined
  images: Array<string>
}

export interface CreateCommentFormValues {
  postId?: number
  parentId?: number
  content?: string
  commentMedia?: Array<string>
}

export interface PostType {
  id: number
  user_id: number
  content: string
  count_comment: number
  count_reaction: number
  post_channel_default_id: number
  post_channel_user_id: any
  create_at: string
  update_at: string
  post_topic_hashtag: PostTopicHashtagType[]
  post_media: PostMediaType[]
  user: UserType
}

export interface PostTopicHashtagType {
  id: number
  name: string
  order_number?: number
  icon_url: string
  version?: number
}

export interface PostMediaType {
  id: number
  post_id: number
  media_url: string
  create_at: string
  update_at: string
}

export interface UserType {
  id: number
  name: string
  profile_picture_url: any
}

export interface Paging {
  page: number
  limit: number
  totalItemCount: number
}

export interface CommentType {
  id?: number | undefined
  post_id: number
  user_id: number
  parent_id?: any | undefined
  content: string
  tagged_user_id?: any | undefined
  url_media?: any | undefined
  count_reaction?: number | undefined
  media_type?: any | undefined
  create_at?: string | undefined
  update_at?: string | undefined
  user?: UserType | undefined
}

export interface PostChannelType {
  id: number
  name: string
  description: string
  order_number: number
  picture_url: string
  version: number
}

export interface ReactionType {
  id: number
  name: string
  order_number: number
  url_icon: string
  version: number
}

export interface UserHashtagType {
  id: number
  name: string
  order_number: number
  icon_url: string
  version: number
}

export interface ReactionType {
  id: number
  post_id: number
  user_id: number
  df_reaction_id: number
  create_at: string
  update_at: string
  df_reaction_name: string
  df_reaction_url_icon: string
  user: UserType
}
