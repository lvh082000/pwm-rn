import DeviceHelper from 'config/DeviceHelper'
import React, {useRef} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import Modal from 'react-native-modal'
import {c, l, t} from 'styles/shared'
import {Button} from '../Button'
import {IconType, VectorIcon} from '../VectorIcon'
import styles from './ styles'
import {DialogParams, DialogType} from './DialogProvider'

interface Props extends DialogParams {
  visible: boolean
  onRequestClose: () => void
  onModalClosed?: () => void
  onModalConfirm?: () => void
}

const colors = {
  warning: '#ffc107',
  error: c.red400,
  success: c.green100,
  confirmation: c.blue800,
  info: c.green300,
}

const useDialogTheme = (type: DialogType) => {
  const themeType = type?.toLocaleLowerCase()
  // @ts-ignore
  const themeColor = colors[themeType]

  if (type === 'Confirmation') {
    return {
      viewStyle: {backgroundColor: themeColor},
      color: themeColor,
    }
  }

  return {
    viewStyle: {backgroundColor: themeColor},
    color: themeColor,
  }
}

const DialogButton = ({
  type,
  onPress,
}: {
  type: DialogType
  onPress: () => void
}) => {
  if (type === 'Confirmation') {
    return (
      <Button
        widgetStyles={{container: [l.px0]}}
        type="gradient-button"
        size="sm"
        onPress={onPress}
        title="Xác nhận"
      />
    )
  }

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <Text style={[t.h5, {fontFamily: t.fontFamily.RobotoSlab.Bold}]}>
        Đóng
      </Text>
    </TouchableOpacity>
  )
}

const DialogTitle = React.memo(
  ({type, title}: {type: DialogType; title: string}) => {
    const {color} = useDialogTheme(type)
    return (
      <View style={[styles.header]}>
        <Text style={[styles.title, {color: color}]}>{title}</Text>
      </View>
    )
  },
)

const DialogIcon = React.memo(({type}: {type: DialogType}) => {
  const {viewStyle} = useDialogTheme(type)
  let nameIcon = 'check'
  switch (type) {
    case 'Confirmation':
      nameIcon = 'question'
      break
    case 'Error':
      nameIcon = 'exclamation'
      break
    case 'Warning':
      nameIcon = 'info'
      break
    case 'Info':
      nameIcon = 'question'
      break
  }
  return (
    <View style={[styles.iconContainer, viewStyle]}>
      <VectorIcon
        color={c.white}
        type={IconType.fontAwesome}
        name={nameIcon}
        size={30}
      />
    </View>
  )
})

const Dialog = ({
  visible,
  onRequestClose,
  title,
  type,
  message,
  onModalConfirm,
  onModalClosed,
}: Props) => {
  const isOKPressed = useRef(false)

  const close = () => {
    onRequestClose()
  }

  const onModalHide = () => {
    if (isOKPressed.current) {
      onModalConfirm?.()
    } else {
      onModalClosed?.()
    }
    isOKPressed.current = false
  }

  const onConfirm = () => {
    isOKPressed.current = true
    close()
  }

  return (
    <Modal
      onModalHide={onModalHide}
      onBackdropPress={close}
      onBackButtonPress={close}
      deviceHeight={DeviceHelper.height}
      statusBarTranslucent={true}
      isVisible={visible}>
      <View style={styles.wrapper}>
        <DialogIcon type={type} />
        <DialogTitle title={title as string} type={type} />
        <View style={styles.content}>
          {message && <Text style={[styles.message]}>{message}</Text>}
          <DialogButton type={type} onPress={onConfirm} />
          {type === 'Confirmation' && (
            <Button
              widgetStyles={{
                container: [l.fullWidth, l.mt15, {backgroundColor: c.white}],
                textTitle: [{color: c.black1000}],
              }}
              size="sm"
              onPress={close}
              title="Hủy bỏ"
            />
          )}
        </View>
      </View>
    </Modal>
  )
}

export default React.memo(Dialog)
