import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios'
import {DialogRef} from 'components/Dialog'
import Settings from 'config/Settings'
import {GetAuthentication} from 'store/Authentication'

interface CustomRequestConfig extends AxiosRequestConfig {
  dialogType?: 'Dialog' | 'None'
}

axios.defaults.baseURL = Settings.API_URL

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    // refresh_token hết hạn -> out luôn
    if (response.data.code === 401) {
      DialogRef.show({
        type: 'Error',
        message: response.data.message,
        title: 'Error 401',
      })
      return
    }

    if (response.data.code === 404) {
      DialogRef.show({
        type: 'Error',
        message: response.data.message,
        title: 'Error 404',
      })
      return
    }

    // access_token hết hạn -> create new access_token
    if (response.data.code === 419) {
      DialogRef.show({
        type: 'Error',
        message: response.data.message,
        title: 'Error 419',
      })
      return
    }

    if (response.data.code === 500) {
      DialogRef.show({
        type: 'Error',
        message: response.data.message,
        title: 'Error 500',
      })
      return
    }

    if (response.data.code === 5) {
      DialogRef.show({
        type: 'Error',
        message: response.data.message,
        title: 'Error 5',
      })
      return
    }

    if (response.data.code === 4) {
      DialogRef.show({
        type: 'Error',
        message: response.data.message,
        title: 'Error 4',
      })
      return
    }

    if (response.data.code === 3) {
      DialogRef.show({
        type: 'Error',
        message: response.data.message,
        title: 'Error3',
      })
      return
    }

    if (response.data.code === 0) {
      DialogRef.show({
        type: 'Error',
        message: response.data.message,
        title: 'Error',
      })
      return
    }

    return response
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

const createAxiosConfig = (config: CustomRequestConfig = {}) => {
  const {accessToken, refreshToken} = GetAuthentication()
  const AxiosConfig = {
    ...config,
    dialogType: config.dialogType ?? 'Dialog',
    headers: {
      ...config.headers,
      Accept: 'application/json',
      refresh_token: refreshToken,
      access_token: accessToken,
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
      Expires: '0',
    },
  }
  return AxiosConfig
}

export default class HttpService {
  static async Get<T>(url: string, config: CustomRequestConfig = {}) {
    return await axios
      .get<T>(url, createAxiosConfig(config))
      .then(res => res.data)
  }

  static async Post<T>(
    url: string,
    data: any,
    config: CustomRequestConfig = {},
  ) {
    return await axios
      .post<T>(url, data, createAxiosConfig(config))
      .then(res => res.data)
  }

  static async Put<T>(
    url: string,
    data: any,
    config: CustomRequestConfig = {},
  ) {
    return await axios
      .put(url, data, createAxiosConfig(config))
      .then(res => res.data)
  }

  static async Patch<T>(
    url: string,
    data: any,
    config: CustomRequestConfig = {},
  ) {
    return await axios
      .patch<T>(url, data, createAxiosConfig(config))
      .then(res => res.data)
  }

  static async Delete<T>(url: string, config: CustomRequestConfig = {}) {
    return await axios
      .delete<T>(url, createAxiosConfig(config))
      .then(res => res.data)
  }
}
