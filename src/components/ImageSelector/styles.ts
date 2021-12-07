import {StyleSheet} from 'react-native'
import {c, l} from 'styles/shared'
import DeviceHelper from 'config/DeviceHelper'

export const ImageSelectorSize = (DeviceHelper.width - 30) / 2

const styles = StyleSheet.create({
  container: {},
  circleContainer: {
    borderRadius: ImageSelectorSize / 2,
  },
  squareContainer: {
    borderRadius: 10,
  },
  image: {
    width: ImageSelectorSize,
    height: ImageSelectorSize,
    borderRadius: 10,
  },
  itemContainer: {
    ...l.flexCenter,
    ...l.mx5,
    width: ImageSelectorSize,
    height: ImageSelectorSize,
    borderRadius: 10,
    position: 'relative',
    overflow: 'visible',
  },
  removeButton: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 6,
    position: 'absolute',
    right: 5,
    top: 5,
    zIndex: 2,
  },
  selectorContainer: {
    ...l.flexCenter,
    ...l.mx5,
    backgroundColor: c.white,
    width: ImageSelectorSize,
    height: ImageSelectorSize,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 6,
  },
})

export default styles
