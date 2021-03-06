import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import styles from './styles'
import RootNavigation from "../../Router/RootNavigation";
import Screen2 from "../Screen2";

interface HomeProps {
  navigation: StackNavigationProp<any, any>
}

export default function Home(props: HomeProps) {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Text onPress={()=>RootNavigation.navigate('bootStrackStack',{})}>Home-Navigate-stack2</Text>
        <Text onPress={()=>RootNavigation.navigate('CAppUpdateContainer',{})}>navigate-Screen2</Text>
      </View>
    </ScrollView>
  )
}
