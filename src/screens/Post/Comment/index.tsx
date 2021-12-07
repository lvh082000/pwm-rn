import {RouteProp} from '@react-navigation/native'
import {HeaderApp} from 'components/HeaderApp'
import LoadingView from 'components/LoadingView'
import NoDataView from 'components/NoDataView'
import {IconType, VectorIcon} from 'components/VectorIcon'
import {RootScreenID, RootStackParams} from 'navigation/types'
import React, {useCallback, useEffect, useState} from 'react'
import {FlatList, TextInput, TouchableOpacity, View} from 'react-native'
import {CommentService} from 'services/CommentService'
import NavigationService from 'services/NavigationService'
import {c, l} from 'styles/shared'
import {CommentType} from 'types/Properties'
import CommentItem from './components/CommentItem'

interface Props {
  route: RouteProp<RootStackParams, RootScreenID.Comment>
}

const Comment = ({route: {params}}: Props) => {
  const [comments, setComments] = useState<Array<CommentType>>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [textComment, setTextComment] = useState<string>('')

  const goBack = () => {
    NavigationService.goBack()
  }

  const navigationReaction = useCallback(() => {
    NavigationService.pushToScreen(RootScreenID.Reaction, {id: params.postId})
  }, [])

  const postComment = async () => {
    setTextComment('')
    try {
      await CommentService.createComment({
        postId: params.postId,
        content: textComment,
      })
    } catch (error) {
      console.log('[ERROR] createComment', error)
    } finally {
      const data = await CommentService.getCommentPost(params.postId)
      setComments(data)
    }
  }

  useEffect(() => {
    const getComments = async () => {
      try {
        setIsLoading(true)
        const data = await CommentService.getCommentPost(params.postId)
        setComments(data)
      } catch (error) {
        console.log('[ERROR] getComments', error)
      } finally {
        setIsLoading(false)
      }
    }
    getComments()
  }, [])

  const renderItem = ({item, index}: {item: CommentType; index: number}) => {
    return <CommentItem key={index} item={item} onItemPress={() => {}} />
  }

  const renderContent = () => {
    if (isLoading) {
      return <LoadingView />
    }
    if (comments?.length === 0) {
      return <NoDataView title="Chưa có bình luận nào😢😢" />
    }
    return (
      <FlatList
        data={comments}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    )
  }

  const RightComponent = () => {
    return (
      <TouchableOpacity style={[l.mr10]} activeOpacity={0.7}>
        <VectorIcon
          type={IconType.antDesign}
          name="like2"
          size={25}
          color={c.white}
        />
      </TouchableOpacity>
    )
  }

  return (
    <View style={[l.flex, {backgroundColor: c.drak}]}>
      <HeaderApp
        widgetStyles={{
          container: [{borderBottomColor: c.gray, borderBottomWidth: 0.5}],
        }}
        leftIcon={{
          type: IconType.antDesign,
          name: 'arrowleft',
          size: 25,
          color: c.white,
        }}
        onPressLeftIcon={goBack}
        title={`${params?.reactions?.length} lượt thích`}
        onTitlePress={navigationReaction}
        rightComponent={<RightComponent />}
      />

      {renderContent()}

      <View
        style={[
          l.flexRow,
          {borderTopWidth: 1, borderTopColor: c.white},
          l.px10,
          l.alignCtr,
        ]}>
        <TextInput
          placeholder="Viết bình luận..."
          value={textComment}
          onChangeText={setTextComment}
          placeholderTextColor={c.gray}
          style={[l.flex]}
        />
        <TouchableOpacity activeOpacity={0.7} onPress={postComment}>
          <VectorIcon
            type={IconType.ionIcon}
            name="send-sharp"
            size={28}
            color={c.green100}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Comment
