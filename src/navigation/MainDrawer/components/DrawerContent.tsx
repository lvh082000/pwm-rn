import {DrawerContentComponentProps} from '@react-navigation/drawer'
import {NonAvatar} from 'components/Avatar'
import {useDialog} from 'components/Dialog'
import {useAppDispatch} from 'hook/useRedux'
import {RootScreenID} from 'navigation/types'
import React, {useCallback} from 'react'
import {ScrollView, Text, View} from 'react-native'
import NavigationService from 'services/NavigationService'
import {logout as AuthenticationLogout} from 'store/Authentication'
import {GetProfile, logout as UserLogout} from 'store/User'
import {c, l, t} from 'styles/shared'
import {appOptionList, homeOptionList} from './data'
import {DrawerOption} from './DrawerOption'
import {styles} from './styles'

const DrawerContent = (props: DrawerContentComponentProps) => {
  const dialog = useDialog()
  const dispatch = useAppDispatch()

  const {userInfo} = GetProfile()

  const onLogout = useCallback(() => {
    NavigationService.resetToScreen(RootScreenID.Splash)
    dispatch(AuthenticationLogout())
    dispatch(UserLogout())
  }, [])

  const onPress = useCallback(
    (link: string | undefined, screen: string | undefined) => {
      props.navigation.closeDrawer()

      if (!link) {
        dialog.show({
          type: 'Confirmation',
          message: 'Bạn có muốn đăng xuất?',
          title: 'Xác Nhận',
          onModalConfirm: onLogout,
        })
      } else {
        if (!screen) {
          props.navigation.navigate(link)
        } else {
          props.navigation.navigate(link, {screen})
        }
      }
    },
    [],
  )

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[l.flex, {backgroundColor: c.drak}]}
      bounces={false}>
      <View>
        <View style={styles.sectionInfo}>
          <NonAvatar name={userInfo?.name as string} size={60} type="circle" />
          <Text
            style={[
              {
                fontFamily: t.fontFamily.RobotoSlab.Bold,
                color: c.white,
              },
              t.h4,
            ]}>
            {userInfo?.name}
          </Text>
        </View>
        <View style={styles.sectionOption}>
          {homeOptionList?.map(option => (
            <DrawerOption onPress={onPress} key={option.id} item={option} />
          ))}
        </View>

        <View style={styles.sectionOption}>
          {appOptionList?.map(option => (
            <DrawerOption onPress={onPress} key={option.id} item={option} />
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

export default DrawerContent
