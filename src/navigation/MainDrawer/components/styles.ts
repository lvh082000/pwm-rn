import {StyleSheet} from 'react-native'
import {c, l} from 'styles/shared'

const styles = StyleSheet.create({
  sectionInfo: {
    ...l.pt5,
    ...l.pb15,
    ...l.flexCenter,
    borderBottomColor: c.gray,
    borderBottomWidth: 1,
  },
  sectionOption: {
    ...l.py5,
    borderBottomColor: c.gray,
    borderBottomWidth: 1,
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
})

export {styles}
