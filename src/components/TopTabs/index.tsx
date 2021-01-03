/*
 * @Author: Mr.pz
 * @Date: 2021-01-03 01:02:27
 * @Last Modified by: Mr.pz
 * @Last Modified time: 2021-01-03 22:41:20
 * 顶部tab切换
 */

import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Text} from 'react-native-paper';
import Recommend from 'page/Recommend';

const Tab = createMaterialTopTabNavigator();

const SettingsScreen = () => <Text>456</Text>;

const config = [
  {
    name: '推荐',
    comp: Recommend,
    rest: {},
  },
  {
    name: '女装',
    comp: SettingsScreen,
    rest: {},
  },
];

function TopTabs() {
  return (
    <Tab.Navigator
      lazy={true}
      tabBarOptions={{
        labelStyle: {textTransform: 'none', fontSize: 18},
        scrollEnabled: true,
        tabStyle: {width: 50, padding: 0},
      }}>
      {config.map((item) => {
        const {name, comp, rest = {}} = item;
        return <Tab.Screen key={name} name={name} component={comp} {...rest} />;
      })}
    </Tab.Navigator>
  );
}

export default TopTabs;
