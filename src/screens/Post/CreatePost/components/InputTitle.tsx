import React, {SetStateAction} from 'react'
import {TextInput, View} from 'react-native'
import {c, l} from 'styles/shared'

interface Props {
  content?: string | undefined
  setContent: React.Dispatch<SetStateAction<string>>
}

export const InputTitle = React.memo(({content, setContent}: Props) => {
  return (
    <View
      style={[
        l.py15,
        l.mx15,
        {borderBottomWidth: 0.5, borderBottomColor: c.gray},
      ]}>
      <TextInput
        placeholder="Bạn muốn chia sẻ điều gì?"
        value={content}
        onChangeText={setContent}
        placeholderTextColor={c.gray}
      />
    </View>
  )
})
