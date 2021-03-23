import {View} from "react-native";
import {Text} from "react-native-paper";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from "react";
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';



function HomeScreen() {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen2</Text>
        </View>
    );
}



export default function HomeNavigator(props:any) {


    const Tab = createMaterialTopTabNavigator();
    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');

    // <Appbar.BackAction onPress={_goBack} />

    function openDrawer() {
        props.navigation.openDrawer()
    }

    return (
        <Appbar.Header>
            <Appbar.Action icon="menu" onPress={openDrawer} />
            <Appbar.Content title="Smart UI" subtitle="DAI Lab Project" />
            <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
        </Appbar.Header>
    );
}

const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
    },
});