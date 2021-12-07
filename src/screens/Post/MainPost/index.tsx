import {HeaderApp} from 'components/HeaderApp'
import {HomeTopTab} from 'navigation/HomeTopTab'
import React from 'react'
import {View} from 'react-native'
import {l} from 'styles/shared'
import NavigationService from 'services/NavigationService'
import {RootScreenID} from 'navigation/types'

const MainPost = () => {
  const navigationSearch = () => {
    NavigationService.pushToScreen(RootScreenID.Search, {})
  }

  return (
    <View style={l.flex}>
      <HeaderApp
        typeLeft="avatar"
        typeMid="search"
        onFocus={navigationSearch}
      />
      <HomeTopTab />
    </View>
  )
}

export default MainPost
