import {c, l, t} from 'styles/shared'
import React from 'react'
import {Text} from 'react-native'

interface Props {
  error?: string
  touched?: boolean
}

export const ErrorMessage = React.memo(({error, touched}: Props) => {
  if (error && touched) {
    return (
      <Text
        style={[
          l.pl10,
          {fontFamily: t.fontFamily.RobotoSlab.Light, color: c.red400},
        ]}>
        {error}
      </Text>
    )
  }
  return null
})
