import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../containers/Home'

type ScreenProp = {
    name: string,
    component: React.ComponentType<any> | any
    params?: any
}


const optionsRouter = {
    headerShown: false,
    gesturesEnabled: false
}

const Stack = createStackNavigator()

const { Navigator, Screen } = createStackNavigator()

const bootStrackStack = [
    { name: 'ABootAppContainer', component: Home },
    { name: 'AAppUpdateContainer', component: Home }
]

const stack2 = [
    { name: 'BBootAppContainer', component: Home },
    { name: 'BAppUpdateContainer', component: Home }
]


const stack3 = [
    { name: 'CBootAppContainer', component: Home },
    { name: 'CAppUpdateContainer', component: Home }
]

const generateStack = (stackArray: ScreenProp[]) => (
    <Stack.Navigator initialRouteName={stackArray[0].name}>
        {stackArray.map((item, index) => (
            <Stack.Screen {...item} key={index} options={optionsRouter} />
        ))}
    </Stack.Navigator>
)

export default function Router () {

    return (
        <NavigationContainer>

            <Navigator>
                <Screen name={'StackName'} component={generateStack(stack2)} />
            </Navigator>


        </NavigationContainer>
    )
}


