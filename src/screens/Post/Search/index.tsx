import {HeaderApp} from 'components/HeaderApp'
import {IconType} from 'components/VectorIcon'
import React from 'react'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import NavigationService from 'services/NavigationService'
import {c, l} from 'styles/shared'

const Search = () => {
  const goBack = () => {
    NavigationService.goBack()
  }

  return (
    <KeyboardAwareScrollView style={[l.flex, {backgroundColor: c.drak}]}>
      <HeaderApp
        leftIcon={{
          type: IconType.antDesign,
          name: 'arrowleft',
          size: 28,
          color: c.white,
        }}
        onPressLeftIcon={goBack}
        typeMid="search"
      />
    </KeyboardAwareScrollView>
  )
}

export default Search
