import {IconType} from 'components/VectorIcon'
import {c} from 'styles/shared'
import {DrawerScreenID} from 'navigation/types'

const homeOptionList = [
  {
    id: 1,
    title: 'Trang chủ',
    link: DrawerScreenID.MainBottomTab,
    icon: {
      name: 'home',
      size: 24,
      type: IconType.antDesign,
      color: c.gray,
    },
  },
]
const appOptionList = [
  {
    id: 1,
    title: 'Cài đặt',
    link: DrawerScreenID.Setting,
    icon: {
      name: 'setting',
      size: 25,
      type: IconType.antDesign,
      color: c.gray,
    },
  },
  {
    id: 2,
    title: 'Đăng xuất',
    icon: {
      name: 'logout',
      size: 25,
      type: IconType.antDesign,
      color: c.gray,
    },
  },
]

export {homeOptionList, appOptionList}
