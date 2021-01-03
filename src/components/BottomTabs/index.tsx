/*
 * @Author: Mr.pz
 * @Date: 2021-01-03 01:02:03
 * @Last Modified by: Mr.pz
 * @Last Modified time: 2021-01-03 01:24:35
 * 底部导航
 */

import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text} from 'react-native-paper';
import HomeScreen from 'page/HomeScreen';

const Tab = createMaterialBottomTabNavigator();

const Notifications = () => <Text>456</Text>;
const Profile = () => <Text>789</Text>;

const config = [
  {
    name: 'Home',
    comp: HomeScreen,
    options: {
      tabBarLabel: 'Home',
      tabBarIcon: ({color}) => (
        <MaterialCommunityIcons name="home" color={color} size={26} />
      ),
    },
  },
  {
    name: 'Notifications',
    comp: Notifications,
    options: {
      tabBarLabel: 'Notifications',
      tabBarIcon: ({color}) => (
        <MaterialCommunityIcons name="bell" color={color} size={26} />
      ),
    },
  },
  {
    name: 'Profile',
    comp: Profile,
    options: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({color}) => (
        <MaterialCommunityIcons name="account" color={color} size={26} />
      ),
    },
  },
];
function BottomTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      {config.map((it) => {
        const {name, comp, options, ...rest} = it;
        return (
          <Tab.Screen
            key={name}
            name={name}
            component={comp}
            options={options}
            {...rest}
          />
        );
      })}
    </Tab.Navigator>
  );
}

export default BottomTabs;
