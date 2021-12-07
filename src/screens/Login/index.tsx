import {HeaderApp} from 'components/HeaderApp'
import {useSpinner} from 'components/Spinner'
import {IconType} from 'components/VectorIcon'
import {useAppDispatch, useThunkCallbackAction} from 'hook/useRedux'
import {RootScreenID} from 'navigation/types'
import React, {useCallback} from 'react'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import NavigationService from 'services/NavigationService'
import {
  login,
  LoginPrefix,
  signToken,
  SignTokenPrefix,
} from 'store/Authentication'
import {getUserInfo, GetUserInfoPrefix} from 'store/User'
import {c, l} from 'styles/shared'
import {FormLogin, FormValues} from './components/FormLogin'

const Login = () => {
  const dispatch = useAppDispatch()
  const spinner = useSpinner()

  const navigationSplash = () => {
    NavigationService.goBack()
  }

  const onSubmit = useCallback(async (values: FormValues) => {
    dispatch(
      login({
        username: values.username,
        password: values.password,
        name_device: '',
      }),
    )
  }, [])

  const onLoginSuccess = useCallback(() => {
    dispatch(signToken())
  }, [])

  const onSignTokenSuccess = useCallback(() => {
    dispatch(getUserInfo())
  }, [])

  const onLoginLoad = useCallback(() => {
    spinner.show()
  }, [])

  const onError = useCallback(() => {
    spinner.dismiss()
  }, [])

  const onGetUserInfoSuccess = useCallback(() => {
    spinner.dismiss()
    setTimeout(() => {
      NavigationService.resetToScreen(RootScreenID.MainDrawer)
    })
  }, [])

  useThunkCallbackAction(LoginPrefix, onLoginSuccess, onError, onLoginLoad)

  useThunkCallbackAction(SignTokenPrefix, onSignTokenSuccess)

  useThunkCallbackAction(GetUserInfoPrefix, onGetUserInfoSuccess)

  return (
    <KeyboardAwareScrollView style={[l.flex, {backgroundColor: c.drak}]}>
      <HeaderApp
        widgetStyles={{container: [l.ml10]}}
        leftIcon={{
          type: IconType.antDesign,
          name: 'arrowleft',
          size: 28,
          color: c.white,
        }}
        onPressLeftIcon={navigationSplash}
      />
      <FormLogin onSubmit={onSubmit} />
    </KeyboardAwareScrollView>
  )
}

export default Login
