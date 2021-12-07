import {CommonActions, DrawerActions} from '@react-navigation/native'
import {NavigationState, StackActions} from '@react-navigation/routers'

type Params = {[key: string]: any} | undefined

export default class NavigationService {
  static navigator: any = {}
  static currentRouterName: string
  static currentRouteParams: Params = {}
  static prevRouterName: string
  static prevRouteParams: Params = {}

  static pushToScreen = (
    name: string,
    params?: Params,
    resultCallback?: any,
  ) => {
    NavigationService.navigator &&
      NavigationService.navigator.dispatch(
        CommonActions.navigate({
          name,
          params: params ? {...params, resultCallback} : {resultCallback},
        }),
      )
  }

  static forcePushScreen = (name: string, params?: Params) => {
    const pushAction = StackActions.push(name, params)
    NavigationService.navigator &&
      NavigationService.navigator.dispatch(pushAction)
  }

  static resetToScreen = (name: string, params?: Params) => {
    NavigationService.navigator &&
      NavigationService.navigator.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name, params}],
        }),
      )
  }

  static replace = (name: string, params?: Params) => {
    NavigationService.navigator &&
      NavigationService.navigator.dispatch(StackActions.replace(name, params))
  }

  static goBack = (n = 1, resultData: undefined | Params = undefined) => {
    if (
      resultData &&
      NavigationService.currentRouteParams &&
      NavigationService.currentRouteParams.resultCallback
    ) {
      NavigationService.currentRouteParams.resultCallback(resultData)
    }
    NavigationService.navigator &&
      NavigationService.navigator.dispatch(StackActions.pop(n))
  }
  static backToTop = () => {
    NavigationService.navigator &&
      NavigationService.navigator.dispatch(StackActions.popToTop())
  }

  static onStateChange = (state: NavigationState | undefined) => {
    if (!state) {
      return
    }
    const {params, name} = state.routes[state.index]
    NavigationService.prevRouteParams = NavigationService.currentRouteParams
    NavigationService.prevRouterName = NavigationService.currentRouterName
    NavigationService.currentRouterName = name
    NavigationService.currentRouteParams = params
  }

  static openDrawer = () => {
    NavigationService.navigator &&
      NavigationService.navigator.dispatch(DrawerActions.openDrawer())
  }

  static closeDrawer = () => {
    NavigationService.navigator &&
      NavigationService.navigator.dispatch(DrawerActions.closeDrawer())
  }
}
