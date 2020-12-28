/*
 * @Author: Mr.pz
 * @Date: 2020-12-28 21:31:43
 * @Last Modified by: Mr.pz
 * @Last Modified time: 2020-12-28 21:45:05
 * 从侧边拉出
 */

import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {useIsDrawerOpen} from '@react-navigation/drawer';
import {DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen({navigation}) {
  const isOpen = useIsDrawerOpen();
  console.log(isOpen); // 启动的控制台查看
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
      <Button onPress={() => navigation.openDrawer()} title="openDrawer" />
      <Button onPress={() => navigation.closeDrawer()} title="closeDrawer" />
      <Button onPress={() => navigation.toggleDrawer()} title="toggleDrawer" />
      <Button
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        title="action 任何打开"
      />
      <Text>左侧状态..............{isOpen}</Text>
      <Button
        // 默认跳到profile 修改默认，并携带参数
        onPress={() =>
          navigation.navigate('Root', {
            screen: 'Settings',
            params: {user: 'jane'},
          })
        }
        title="跳到指定子路由"
      />
    </View>
  );
}

function Profile() {
  return <Text>'Profile'</Text>;
}
function Settings() {
  return <Text>'Settings'</Text>;
}
const Stack = createStackNavigator();
function Root({route}) {
  console.log(route.params, '获取路由传单');
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();
// 侧边拉出
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Root" component={Root} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
