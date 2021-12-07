import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {HomeTopTabBar} from 'components/MyTabBar'
import React from 'react'
import {GetDefaults} from 'store/Defaults'

export enum HomeTopTabScreenId {
  World = 'HomeTopTabScreenId_World',
  Community = 'HomeTopTabScreenId_Community',
}

const Tab = createMaterialTopTabNavigator()

const HomeTopTab = () => {
  const {postChannels} = GetDefaults()

  return (
    <Tab.Navigator tabBar={props => <HomeTopTabBar {...props} />}>
      <Tab.Screen
        name={HomeTopTabScreenId.World}
        getComponent={() => require('screens/Post/World').default}
        options={{title: postChannels[0]?.name}}
      />
      <Tab.Screen
        name={HomeTopTabScreenId.Community}
        getComponent={() => require('screens/Post/Community').default}
        options={{title: postChannels[1]?.name}}
      />
    </Tab.Navigator>
  )
}

export {HomeTopTab}
