import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import styles from './styles'

interface HomeProps {
  navigation: StackNavigationProp<any, any>
}

export default function Home(props: HomeProps) {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Text>Template</Text>
      </View>
    </ScrollView>
  )
}
