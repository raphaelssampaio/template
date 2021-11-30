import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../containers/Home'
import {navigationRef} from "./RootNavigation";
import Screen2 from '../containers/Screen2';
import Screen3 from '../containers/Screen3';
import Screen4 from '../containers/Screen4';

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



const generateStack = (stackArray: ScreenProp[]) => (
    stackArray.map((item, index) => (
        <Stack.Screen name={item.name} component={item.component} key={index} options={optionsRouter} />
    ))
)

function stack1 () {
    const stack1 = [
        { name: 'CBootAppContainer', component: Home },
        { name: 'CAppUpdateContainer', component: Screen2 }
    ]
    return (
        <Stack.Navigator initialRouteName={stack1[0].name}>
            {generateStack(stack1)}
        </Stack.Navigator>
    )
}

function bootStrackStack () {
    const bootStrackStack = [
        { name: 'ABootAppContainer', component: Screen3 },
        { name: 'AAppUpdateContainer', component: Screen4 }
    ]
    return (
        <Stack.Navigator initialRouteName={bootStrackStack[0].name}>
            {generateStack(bootStrackStack)}
        </Stack.Navigator>
    )
}

export default function Router () {

    return (
        <NavigationContainer ref={navigationRef}>
            <Navigator>
                <Screen name={'stack1'} component={stack1} />
                <Screen name={'stack2'} component={bootStrackStack} />
            </Navigator>
        </NavigationContainer>
    )
}


