
//路由导航页面

import 'react-native-gesture-handler';
import React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, } from '@react-navigation/native';

import Login from './page/account/login/index'

const Stack = createNativeStackNavigator()

function Home({navigation}:any):React.JSX.Element{
  return <View>
    <Text>首页1</Text>
    <Button title="返回" onPress={() => {
      navigation.goBack()
    }}></Button>
  </View>
}

function Personal():React.JSX.Element{
  return <View>
    <Text>个人中心</Text>
  </View>
}

function Nav(): React.JSX.Element {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' >
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Personal' component={Personal} />
    </Stack.Navigator>
    </NavigationContainer>
    
  )
}


export default Nav;
