import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import NavigationService from 'services/NavigationService'
import {IsAuth} from 'store/User'
import {RootScreenID, RootStackParams} from './types'

const RootStack = createStackNavigator<RootStackParams>()

const AppNavigator = () => {
  const isAuth = IsAuth()

  return (
    <NavigationContainer
      onStateChange={state => NavigationService.onStateChange(state)}
      ref={ref => (NavigationService.navigator = ref)}>
      <RootStack.Navigator
        initialRouteName={
          isAuth ? RootScreenID.MainDrawer : RootScreenID.Splash
        }
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        <RootStack.Screen
          name={RootScreenID.Splash}
          getComponent={() => require('screens/Splash').default}
        />
        <RootStack.Screen
          name={RootScreenID.Login}
          getComponent={() => require('screens/Login').default}
        />
        <RootStack.Screen
          name={RootScreenID.Register}
          getComponent={() => require('screens/Register').default}
        />
        <RootStack.Screen
          name={RootScreenID.VerifyPhone}
          getComponent={() => require('screens/VerifyPhone').default}
        />
        <RootStack.Screen
          name={RootScreenID.MainDrawer}
          getComponent={() => require('./MainDrawer').default}
        />
        <RootStack.Screen
          name={RootScreenID.CreatePost}
          getComponent={() => require('screens/Post/CreatePost').default}
        />
        <RootStack.Screen
          name={RootScreenID.Search}
          getComponent={() => require('screens/Post/Search').default}
        />
        <RootStack.Screen
          name={RootScreenID.Comment}
          getComponent={() => require('screens/Post/Comment').default}
        />
        <RootStack.Screen
          name={RootScreenID.Reaction}
          getComponent={() => require('screens/Post/Reaction').default}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
