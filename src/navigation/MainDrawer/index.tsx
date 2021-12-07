import {createDrawerNavigator} from '@react-navigation/drawer'
import React from 'react'
import {DrawerScreenID} from '../types'
import DrawerContent from './components/DrawerContent'

const Drawer = createDrawerNavigator()

const MainDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName={DrawerScreenID.MainBottomTab}
      screenOptions={{
        swipeEnabled: false,
        headerShown: false,
        drawerType: 'front',
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name={DrawerScreenID.MainBottomTab}
        getComponent={() => require('../MainBottomTab').default}
      />
      <Drawer.Screen
        name={DrawerScreenID.Setting}
        getComponent={() => require('screens/Setting').default}
      />
    </Drawer.Navigator>
  )
}

export default MainDrawer
