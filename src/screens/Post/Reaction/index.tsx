import {RouteProp} from '@react-navigation/native'
import {HeaderApp} from 'components/HeaderApp'
import LoadingView from 'components/LoadingView'
import NoDataView from 'components/NoDataView'
import {IconType} from 'components/VectorIcon'
import {RootScreenID, RootStackParams} from 'navigation/types'
import React, {useEffect, useState} from 'react'
import {FlatList, View} from 'react-native'
import NavigationService from 'services/NavigationService'
import {ReactionService} from 'services/ReactionService'
import {c, l} from 'styles/shared'
import {ReactionType} from 'types/Properties'
import ReactionItem from './components/ReactionItem'

interface Props {
  route: RouteProp<RootStackParams, RootScreenID.Reaction>
}

const Reaction = ({route: {params}}: Props) => {
  const [reactions, setReactions] = useState<Array<ReactionType>>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const goBack = () => {
    NavigationService.goBack()
  }

  useEffect(() => {
    const getReactions = async () => {
      try {
        setIsLoading(true)
        const data = await ReactionService.getReactionsPost(params.id)
        setReactions(data)
      } catch (error) {
        console.log('[ERROR] getReactions', error)
      } finally {
        setIsLoading(false)
      }
    }
    getReactions()
  }, [])

  const renderItem = ({item, index}: {item: ReactionType; index: number}) => {
    return <ReactionItem key={index} item={item} onItemPress={() => {}} />
  }

  const renderContent = () => {
    if (isLoading) {
      return <LoadingView />
    }
    if (reactions?.length === 0) {
      return <NoDataView title="Chưa có lượt thích nào😢😢" />
    }
    return (
      <FlatList
        data={reactions}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
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
          size: 28,
          color: c.white,
        }}
        onPressLeftIcon={goBack}
        title="Người đã bày tỏ cảm xúc"
      />
      {renderContent()}
    </View>
  )
}

export default Reaction
