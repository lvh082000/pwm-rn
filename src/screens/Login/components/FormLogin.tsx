import {Button} from 'components/Button'
import {Input, SharedValidationSchema} from 'components/FormControls'
import {IconType} from 'components/VectorIcon'
import DeviceHelper from 'config/DeviceHelper'
import {Formik} from 'formik'
import React, {useState} from 'react'
import {Text, View} from 'react-native'
import {c, l} from 'styles/shared'
import * as Yup from 'yup'
import {styles} from '../styles'

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Vui lòng nhập số điện thoại hoặc email!'),
  password: SharedValidationSchema.password('Vui lòng nhập password'),
})

export interface FormValues {
  username: string
  password: string
}

const initialValues: FormValues = {
  username: '',
  password: '',
}

interface FormLoginProps {
  onSubmit: (values: FormValues) => void
}

export const FormLogin = React.memo(({onSubmit}: FormLoginProps) => {
  const [secure, setSecure] = useState<boolean>(true)

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {({values, errors, touched, handleChange, handleSubmit}) => {
        return (
          <View style={[l.flex]}>
            <View style={[l.mt10]}>
              <Text style={styles.textWelcome}>Chào mừng trở lại!</Text>
            </View>

            <Input
              widgetStyles={{
                container: [l.mt30],
                containerInput: {backgroundColor: c.black800, borderWidth: 0},
              }}
              placeholder="Email hoặc số điện thoại"
              value={values.username}
              onTextChange={handleChange('username')}
              boardType="email-address"
              touched={touched.username}
              error={errors.username}
            />

            <Input
              widgetStyles={{
                container: [l.mt20],
                containerInput: {backgroundColor: c.black800, borderWidth: 0},

                input: {maxWidth: DeviceHelper.width - 80},
              }}
              placeholder="Mật khẩu"
              value={values.password}
              onTextChange={handleChange('password')}
              secure={secure}
              touched={touched.password}
              error={errors.password}
              rightIcon={{
                type: IconType.feather,
                name: secure ? 'eye' : 'eye-off',
                size: 25,
                color: c.green300,
              }}
              onPressRightIcon={() => {
                setSecure(!secure)
              }}
            />

            <Text
              style={[styles.textForgot, l.pl20, l.mt10]}
              onPress={() => {}}>
              Quên mật khẩu{' '}
            </Text>

            <Button
              type="gradient-button"
              widgetStyles={{container: [l.mt30]}}
              title={'Đăng nhập'}
              onPress={handleSubmit}
            />

            <Button
              title={'Đăng nhập với Google'}
              widgetStyles={{container: [l.mt20]}}
              onPress={() => {}}
            />
          </View>
        )
      }}
    </Formik>
  )
})
