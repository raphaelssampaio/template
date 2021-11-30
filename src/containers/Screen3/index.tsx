import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import styles from './styles'
import RootNavigation from "../../Router/RootNavigation";

interface HomeProps {
  navigation: StackNavigationProp<any, any>
}

export default function Home(props: HomeProps) {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Text onPress={()=>RootNavigation.navigate('bootStrackStack',{})}>Screen-3</Text>
        <Text onPress={()=>RootNavigation.navigate('bootStrackStack',{})}>Navigate-bootStrackStack</Text>
      </View>
    </ScrollView>
  )
}
