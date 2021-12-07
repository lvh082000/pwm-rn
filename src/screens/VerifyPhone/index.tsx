import {RouteProp} from '@react-navigation/native'
import {HeaderApp} from 'components/HeaderApp'
import {useSpinner} from 'components/Spinner'
import {IconType} from 'components/VectorIcon'
import {useAppDispatch, useThunkCallbackAction} from 'hook/useRedux'
import {RootScreenID, RootStackParams} from 'navigation/types'
import React, {useCallback, useEffect, useState} from 'react'
import {Text, TextInput, View} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import NavigationService from 'services/NavigationService'
import {
  signToken,
  SignTokenPrefix,
  verifyRegister,
  VerifyRegisterPrefix,
} from 'store/Authentication'
import {getUserInfo, GetUserInfoPrefix} from 'store/User'
import {c, l, t} from 'styles/shared'
import {styles} from './styles'

interface Props {
  route: RouteProp<RootStackParams, RootScreenID.VerifyPhone>
}

const VerifyPhone = ({route: {params}}: Props) => {
  const {phoneNumber, id} = params
  const [code, setCode] = useState<string>('')
  const pinCount: number = 6
  const dispatch = useAppDispatch()
  const spinner = useSpinner()

  const navigationRegister = useCallback(() => {
    NavigationService.goBack()
  }, [])

  const handleVerifyPhone = async () => {
    dispatch(verifyRegister({id, code}))
  }

  const onVerifyPhoneSuccess = useCallback(() => {
    dispatch(signToken())
  }, [])

  const onSignTokenSuccess = useCallback(() => {
    dispatch(getUserInfo())
  }, [])

  const onVerifyPhoneLoad = useCallback(() => {
    spinner.show()
  }, [])

  const onError = useCallback(() => {
    spinner.dismiss()
    setCode('')
  }, [])

  const onGetUserInfoSuccess = useCallback(() => {
    spinner.dismiss()
    setTimeout(() => {
      NavigationService.resetToScreen(RootScreenID.MainDrawer)
    })
  }, [])

  useEffect(() => {
    if (code.length === 6) {
      handleVerifyPhone()
    }
  }, [code])

  useThunkCallbackAction(
    VerifyRegisterPrefix,
    onVerifyPhoneSuccess,
    onError,
    onVerifyPhoneLoad,
  )

  useThunkCallbackAction(SignTokenPrefix, onSignTokenSuccess)

  useThunkCallbackAction(GetUserInfoPrefix, onGetUserInfoSuccess)

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <HeaderApp
        widgetStyles={{container: [l.ml10]}}
        leftIcon={{
          type: IconType.antDesign,
          name: 'arrowleft',
          size: 28,
          color: c.white,
        }}
        onPressLeftIcon={navigationRegister}
      />

      <View style={[l.mt50]}>
        <Text style={styles.textWelcome}>Nhập mã xác thực</Text>
      </View>

      <View style={[l.mt10, l.mb20]}>
        <Text
          style={[
            styles.textWelcome,
            t.p,
            {fontFamily: t.fontFamily.RobotoSlab.Regular},
          ]}>
          {`Một SMS đã được gửi đến +84${phoneNumber}`}
        </Text>
      </View>

      <View style={[l.mx20]}>
        <TextInput
          value={code}
          onChangeText={setCode}
          placeholder="Hãy nhập mã code"
          keyboardType="number-pad"
          maxLength={6}
        />
      </View>

      <View style={[l.mt30]}>
        <Text
          style={{
            ...t.textCtr,
            color: c.green300,
            fontFamily: t.fontFamily.RobotoSlab.Regular,
          }}
          onPress={() => {}}>
          Gửi lại mã
        </Text>
      </View>
    </KeyboardAwareScrollView>
  )
}

export default VerifyPhone
