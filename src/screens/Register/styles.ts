import {StyleSheet} from 'react-native'
import {c, l, t} from 'styles/shared'

const styles = StyleSheet.create({
  textWelcome: {
    ...t.h1,
    ...t.textCtr,
    ...l.mt20,
    color: c.white,
    fontFamily: t.fontFamily.RobotoSlab.Bold,
  },
  sectionOptionRegis: {
    ...l.flexRow,
    ...l.mx20,
    ...l.mt20,
    backgroundColor: c.black800,
    borderRadius: 5,
  },
  option: {
    ...l.flex,
    ...l.alignCtr,
    ...l.py10,
    borderRadius: 5,
  },
  viewSelectBirthday: {
    ...l.mx20,
    ...l.pl10,
    ...l.mt20,
    ...l.justifyCtr,
    backgroundColor: c.black800,
    borderRadius: 5,
    height: 50,
  },
  textForgot: {
    ...l.mx20,
    ...t.pSM,
    color: c.green300,
    fontFamily: t.fontFamily.RobotoSlab.Light,
  },
})

export {styles}
