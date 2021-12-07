import {HeaderApp} from 'components/HeaderApp'
import {IconType} from 'components/VectorIcon'
import React from 'react'
import {View} from 'react-native'
import NavigationService from 'services/NavigationService'
import {c, l} from 'styles/shared'

const Settings = () => {
  const openDrawer = () => {
    NavigationService.openDrawer()
  }
  return (
    <View
      style={[
        l.flex,
        {
          backgroundColor: c.drak,
        },
      ]}>
      <HeaderApp
        leftIcon={{
          type: IconType.entypo,
          name: 'menu',
          size: 25,
          color: c.white,
        }}
        title="Cài đặt"
        onPressLeftIcon={openDrawer}
      />
    </View>
  )
}
export default Settings
