import * as Yup from 'yup'

const phoneRegExp =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
const emailRegExp =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const SharedValidationSchema = {
  email: Yup.string()
    .matches(emailRegExp, 'Email không hợp lệ')
    .required('Vui lòng nhập email'),

  phoneNumber: Yup.string()
    .matches(phoneRegExp, 'Số điện thoại không hợp lệ')
    .required('Vui lòng nhập số điện thoại'),

  password: (msg: string) =>
    Yup.string().min(6, 'Mật khẩu ít nhất phải có 6 kí tự').required(msg),
}
