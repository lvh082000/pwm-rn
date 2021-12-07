import {l} from 'styles/shared'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  item: {
    ...l.flex,
    ...l.py5,
    ...l.flexRow,
    ...l.flexCenter,
    height: 50,
  },
})

export {styles}
