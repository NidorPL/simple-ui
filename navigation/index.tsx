import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {DrawerContent} from "../drawerContent";
import HomeScreen from "../screens/HomeScreen";
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,

    Text,
    TouchableRipple,
    Switch,
} from 'react-native-paper';


import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';


const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();



function StackNavigator () {
    return  (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Root" component={HomeScreen} />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        </Stack.Navigator>
    )
}


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Drawer.Navigator drawerContent={() => <DrawerContent/>}>
                <Drawer.Screen name="Home" component={StackNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
