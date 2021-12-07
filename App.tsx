import {BottomSheetProvider} from 'components/BottomSheet'
import {DialogProvider} from 'components/Dialog'
import AppNavigator from 'navigation/AppNavigator'
import React from 'react'
import {LogBox, StatusBar} from 'react-native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {Persistor, Store} from 'store'
import {c} from 'styles/shared'
import {SpinnerProvider} from 'components/Spinner'

const Container = () => {
  return (
    <DialogProvider>
      <BottomSheetProvider>
        <SpinnerProvider>
          <AppNavigator />
        </SpinnerProvider>
      </BottomSheetProvider>
    </DialogProvider>
  )
}

export default function App() {
  LogBox.ignoreAllLogs() //Ignore all log notifications

  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistor}>
        <SafeAreaProvider>
          <StatusBar barStyle={'light-content'} backgroundColor={c.drak} />
          <Container />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  )
}
