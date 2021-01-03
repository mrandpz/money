/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomTabs from './src/components/BottomTabs';
MaterialCommunityIcons.loadFont();

// 定制主题
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fe473c',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default App;
