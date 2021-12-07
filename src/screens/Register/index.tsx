import {unwrapResult} from '@reduxjs/toolkit'
import {HeaderApp} from 'components/HeaderApp'
import {useSpinner} from 'components/Spinner'
import {IconType} from 'components/VectorIcon'
import {useAppDispatch} from 'hook/useRedux'
import {RootScreenID} from 'navigation/types'
import React, {useCallback, useState} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import NavigationService from 'services/NavigationService'
import {register} from 'store/Authentication'
import {c, l, t} from 'styles/shared'
import {FormRegister, FormValues} from './components/FormRegister'
import {styles} from './styles'

const Register = () => {
  const [regisWithPhone, setRegisWithPhone] = useState<boolean>(true)
  const [regisWithEmail, setRegisWithEmail] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const spinner = useSpinner()

  const navigationSplash = useCallback(() => {
    NavigationService.goBack()
  }, [])

  const handleRegisWithPhone = useCallback(() => {
    setRegisWithPhone(true)
    setRegisWithEmail(false)
  }, [])

  const handleRegisWithEmail = useCallback(() => {
    setRegisWithPhone(false)
    setRegisWithEmail(true)
  }, [])

  const navigationVerityPhone = useCallback(
    (id: number, phoneNumber: string) => {
      NavigationService.pushToScreen(RootScreenID.VerifyPhone, {
        phoneNumber: phoneNumber,
        id: id,
      })
    },
    [],
  )

  const onSubmit = useCallback(async (values: FormValues) => {
    try {
      spinner.show()
      const actionResult = await dispatch(
        register({
          phone: values.phoneNumber,
          email: values.email,
          name: values.name,
          password: values.password,
          date_of_birth: values.birthday,
        }),
      )
      const registerResponse = unwrapResult(actionResult)
      if (regisWithPhone) {
        navigationVerityPhone(registerResponse?.data.id, values.phoneNumber)
      }
    } catch (error) {
      console.log('[ERROR] RegisterWithPhone: ', error)
    } finally {
      spinner.dismiss()
    }
  }, [])

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

      <Text style={styles.textWelcome}>
        {regisWithPhone ? 'Đăng ký bằng số điện thoại' : 'Đăng ký bằng email'}
      </Text>

      <View style={styles.sectionOptionRegis}>
        <TouchableOpacity
          style={[
            styles.option,
            {
              backgroundColor: regisWithPhone ? c.gray : c.black800,
            },
          ]}
          onPress={handleRegisWithPhone}>
          <Text
            style={{
              color: regisWithPhone ? c.white : c.gray,
              fontFamily: regisWithPhone
                ? t.fontFamily.RobotoSlab.Bold
                : t.fontFamily.RobotoSlab.Light,
            }}>
            Số điện thoại
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.option,
            {
              backgroundColor: regisWithEmail ? c.gray : c.black800,
            },
          ]}
          onPress={handleRegisWithEmail}>
          <Text
            style={{
              color: regisWithEmail ? c.white : c.gray,
              fontFamily: regisWithEmail
                ? t.fontFamily.RobotoSlab.Bold
                : t.fontFamily.RobotoSlab.Light,
            }}>
            Email
          </Text>
        </TouchableOpacity>
      </View>

      <FormRegister
        onSubmit={onSubmit}
        regisWithPhone={regisWithPhone}
        regisWithEmail={regisWithEmail}
      />
    </KeyboardAwareScrollView>
  )
}

export default Register
