import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {BottomTabBar} from 'components/MyTabBar'
import {IconType, VectorIcon} from 'components/VectorIcon'
import React from 'react'
import {BottomTabScreenId} from '../types'

const Tab = createBottomTabNavigator()

const MainBottomTab = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomTabBar {...props} />}
      initialRouteName={BottomTabScreenId.HomeTopTab}
      screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name={BottomTabScreenId.HomeTopTab}
        getComponent={() => require('screens/Post/MainPost').default}
        options={{
          tabBarIcon: () => (
            <VectorIcon type={IconType.antDesign} name="home" />
          ),
        }}
      />
      <Tab.Screen
        name={BottomTabScreenId.PlayWithMe}
        getComponent={() => require('screens/PlayWithMe/Play').default}
        options={{
          tabBarIcon: () => (
            <VectorIcon type={IconType.antDesign} name="playcircleo" />
          ),
        }}
      />
      <Tab.Screen
        name={BottomTabScreenId.Chat}
        getComponent={() => require('screens/Message/Chat').default}
        options={{
          tabBarIcon: () => (
            <VectorIcon type={IconType.antDesign} name="message1" />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default MainBottomTab
