import {IconType, VectorIcon} from 'components/VectorIcon'
import {RootScreenID} from 'navigation/types'
import React, {useCallback, useEffect, useState} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import NavigationService from 'services/NavigationService'
import {ReactionService} from 'services/ReactionService'
import {GetProfile} from 'store/User'
import {c, l, t} from 'styles/shared'
import {ReactionType} from 'types/Properties'

interface Props {
  postId: number
  countComment: number
}

export const PostReaction = React.memo(({postId, countComment}: Props) => {
  const {userInfo} = GetProfile()
  const [reactions, setReactions] = useState<Array<ReactionType>>([])

  const liked = reactions.find(v => v.user_id === userInfo?.id)

  const navigationComment = useCallback(() => {
    NavigationService.pushToScreen(RootScreenID.Comment, {
      postId: postId,
      countComment: countComment,
      reactions: reactions,
    })
  }, [reactions])

  const createOrUpdateReaction = async () => {
    try {
      await ReactionService.createOrUpdateReaction(postId, 1)
      const data = await ReactionService.getReactionsPost(postId)
      setReactions(data)
    } catch (error) {
      console.log('[ERROR] createOrUpdateReaction', error)
    }
  }

  const deleteReaction = async () => {
    try {
      await ReactionService.deleteReaction(postId)
      const data = await ReactionService.getReactionsPost(postId)
      setReactions(data)
    } catch (error) {
      console.log('[ERROR] deleteReaction', error)
    }
  }

  useEffect(() => {
    const getReactions = async () => {
      try {
        const data = await ReactionService.getReactionsPost(postId)
        setReactions(data)
      } catch (error) {
        console.log('[ERROR] getReactionsPost', error)
      }
    }
    getReactions()
  }, [])

  return (
    <View style={[l.flexRow]}>
      <View style={[l.flex, l.flexCenter, l.py5]}>
        <Text
          style={[{color: c.white, fontFamily: t.fontFamily.RobotoSlab.Medium}]}
          onPress={navigationComment}>
          {reactions?.length} lượt thích
        </Text>

        <TouchableOpacity
          style={[l.flexRow, l.alignCtr, l.mt10]}
          activeOpacity={0.7}
          onPress={liked ? deleteReaction : createOrUpdateReaction}>
          <VectorIcon
            type={IconType.antDesign}
            name="like2"
            size={25}
            color={liked ? c.green100 : c.white}
          />
          <Text
            style={[
              {
                fontFamily: t.fontFamily.RobotoSlab.Regular,
                color: c.white,
              },
              l.ml5,
            ]}>
            Thích
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[l.flex, l.flexCenter, l.py5]}
        onPress={navigationComment}
        activeOpacity={0.7}>
        <Text
          style={[
            {color: c.white, fontFamily: t.fontFamily.RobotoSlab.Medium},
          ]}>
          {countComment} lượt bình luận
        </Text>

        <View style={[l.flexRow, l.alignCtr, l.mt10]}>
          <VectorIcon
            type={IconType.fontAwesome}
            name="commenting-o"
            size={25}
            color={c.white}
          />
          <Text
            style={[
              {
                fontFamily: t.fontFamily.RobotoSlab.Regular,
                color: c.white,
              },
              l.ml5,
            ]}>
            Bình luận
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
})
