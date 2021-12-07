import {CommentParams} from 'types/Params'

export enum RootScreenID {
  Splash = 'RootScreen_Splash',
  Login = 'RootScreen_Login',
  Register = 'RootScreen_Register',
  VerifyPhone = 'RootScreen_VerifyPhone',
  VerifyEmail = 'RootScreen_VerifyEmail',
  MainDrawer = 'RootScreen_MainDrawer',
  Search = 'RootScreen_Search',
  CreatePost = 'RootScreen_CreatePost',
  Comment = 'RootScreen_Comment',
  Reaction = 'RootScreen_Reaction',
}

export type RootStackParams = {
  [RootScreenID.Splash]: undefined
  [RootScreenID.Login]: undefined
  [RootScreenID.Register]: undefined
  [RootScreenID.VerifyPhone]: {phoneNumber: string; id: number}
  [RootScreenID.VerifyEmail]: undefined
  [RootScreenID.MainDrawer]: undefined
  [RootScreenID.Search]: undefined
  [RootScreenID.CreatePost]: undefined
  [RootScreenID.Comment]: CommentParams
  [RootScreenID.Reaction]: {id: number}
}

export enum DrawerScreenID {
  MainBottomTab = 'DrawerScreen_MainBottomTab',
  Setting = 'DrawerScreen_Setting',
}

export enum BottomTabScreenId {
  HomeTopTab = 'TabScreen_HomeTopTab',
  PlayWithMe = 'TabScreen_PlayWithMe',
  Chat = 'TabScreen_Chat',
}
