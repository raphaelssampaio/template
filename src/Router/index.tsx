import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../containers/Home'


const { Navigator, Screen } = createStackNavigator()

export default function Router() {

  return (
    <NavigationContainer>
      <Navigator initialRouteName='Home'>
        <Screen name='Home' component={Home} options={{ title: 'Gera Sorte', headerTitleAlign: 'center' }} />
      </Navigator>
    </NavigationContainer>
  )
}


