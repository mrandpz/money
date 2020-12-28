/*
 * @Author: Mr.pz
 * @Date: 2020-12-28 21:31:43
 * @Last Modified by: Mr.pz
 * @Last Modified time: 2020-12-28 21:57:44
 * 从侧边拉出
 */

import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, useFocusEffect} from '@react-navigation/native';
import {useIsDrawerOpen} from '@react-navigation/drawer';
import {DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <Text style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      Home
    </Text>
  );
}

function ProfileScreen({navigation}) {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('生命周期');
      // Screen was focused
      // Do something
    });

    return unsubscribe;
  }, [navigation]);
  return <Text>'Profile'</Text>;
}
function SettingsScreen() {
  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      console.log('生命周期2');
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, []),
  );
  return <Text>'Settings'</Text>;
}

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      DetailsScreen
    </View>
  );
}

const HomeStack = createDrawerNavigator();
const SettingsStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="First">
          {() => (
            <SettingsStack.Navigator>
              <SettingsStack.Screen
                name="Settings"
                component={SettingsScreen}
              />
              <SettingsStack.Screen name="Profile" component={ProfileScreen} />
            </SettingsStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Second">
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen name="Home" component={HomeScreen} />
              <HomeStack.Screen name="Details" component={DetailsScreen} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
