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
  phoneNumber: SharedValidationSchema.phoneNumber,
  // email: SharedValidationSchema.email,
  name: Yup.string().required('Vui lòng nhập tên!'),
  password: SharedValidationSchema.password('Vui lòng nhập password!'),
})

export interface FormValues {
  phoneNumber: string
  email: string
  name: string
  password: string
  birthday: number
}

const initialValues: FormValues = {
  phoneNumber: '',
  email: '',
  name: '',
  password: '',
  birthday: 0,
}

interface FormRegisterProps {
  onSubmit: (values: FormValues) => void
  regisWithPhone: boolean
  regisWithEmail: boolean
}

export const FormRegister = React.memo(
  ({
    onSubmit,
    regisWithPhone = true,
    regisWithEmail = false,
  }: FormRegisterProps) => {
    const [secure, setSecure] = useState<boolean>(true)

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => {
          return (
            <View style={[l.flex]}>
              {regisWithPhone && (
                <Input
                  widgetStyles={{
                    container: [l.mt30],
                    containerInput: {
                      backgroundColor: c.black800,
                      borderWidth: 0,
                    },
                  }}
                  placeholder="Nhập số điện thoại của bạn"
                  value={values.phoneNumber}
                  onTextChange={handleChange('phoneNumber')}
                  boardType="number-pad"
                  touched={touched.phoneNumber}
                  error={errors.phoneNumber}
                />
              )}

              {regisWithEmail && (
                <Input
                  widgetStyles={{
                    container: [l.mt30],
                    containerInput: {
                      backgroundColor: c.black800,
                      borderWidth: 0,
                    },
                  }}
                  placeholder="Nhập email của bạn"
                  value={values.email}
                  onTextChange={handleChange('email')}
                  boardType="email-address"
                  touched={regisWithEmail ? touched.email : false}
                  error={regisWithEmail ? errors.email : ''}
                />
              )}

              <Input
                widgetStyles={{
                  container: [l.mt20],
                  containerInput: {
                    backgroundColor: c.black800,
                    borderWidth: 0,
                  },
                }}
                placeholder="Nhập tên của bạn"
                value={values.name}
                onTextChange={handleChange('name')}
                touched={touched.name}
                error={errors.name}
              />

              <Input
                widgetStyles={{
                  container: [l.mt20],
                  containerInput: {
                    backgroundColor: c.black800,
                    borderWidth: 0,
                  },

                  input: {maxWidth: DeviceHelper.width - 80},
                }}
                placeholder="Nhập password"
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

              <Text style={styles.textForgot} onPress={() => {}}>
                Chính sách bảo mật của PWM
              </Text>

              <Button
                type="gradient-button"
                widgetStyles={{container: [l.mt30]}}
                title="Continue"
                onPress={handleSubmit}
              />
            </View>
          )
        }}
      </Formik>
    )
  },
)
