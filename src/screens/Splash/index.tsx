import {useAppDispatch} from 'hook/useRedux'
import {RootScreenID} from 'navigation/types'
import React, {useCallback, useEffect} from 'react'
import {View} from 'react-native'
import NavigationService from 'services/NavigationService'
import {
  getPostChannel,
  getPostTopicHashtag,
  getReactionType,
} from 'store/Defaults'
import {l} from 'styles/shared'
import Intro from './components/Intro'

const Splash = () => {
  const dispatch = useAppDispatch()

  const navigationLogin = useCallback(() => {
    NavigationService.pushToScreen(RootScreenID.Login, {})
  }, [])

  const navigationRegister = useCallback(() => {
    NavigationService.pushToScreen(RootScreenID.Register, {})
  }, [])

  useEffect(() => {
    dispatch(getPostChannel())
    dispatch(getReactionType())
    dispatch(getPostTopicHashtag())
  }, [])

  return (
    <View style={[l.flex]}>
      <Intro
        onPressLogin={navigationLogin}
        onPressRegister={navigationRegister}
      />
    </View>
  )
}

export default Splash
