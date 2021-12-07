import {StyleSheet} from 'react-native'
import {c, l, t} from 'styles/shared'

const styles = StyleSheet.create({
  container: {
    ...l.flex,
    backgroundColor: c.drak,
  },
  textWelcome: {
    ...t.h1,
    ...t.textCtr,
    color: c.white,
    fontFamily: t.fontFamily.RobotoSlab.Bold,
  },
  underlineStyleBase: {
    ...t.p,
    padding: 3,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: c.white,
    lineHeight: 16,
  },
  underlineStyleHighLighted: {
    borderColor: c.green300,
  },
})

export {styles}
