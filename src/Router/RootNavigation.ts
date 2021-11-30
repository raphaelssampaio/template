import { createNavigationContainerRef } from '@react-navigation/native'

export const navigationRef = createNavigationContainerRef()

function navigate(name: string, params: {}) {
  if (navigationRef.isReady()) {
    try {
      navigationRef.navigate(name, params)
    } catch (error) {
    }
  }
}

function reset (name: never) {
  if (navigationRef.isReady()) {
    try {
      navigationRef.reset({
        index: 0,
        routes: [{ name }]
      })
    } catch (error) {
    }
  }
}

function pop () {
  if (navigationRef.isReady()) {
    try {
      navigationRef.goBack()
    } catch (error) {
    }
  }
}

export default {
  navigate,
  reset,
  pop,
}
