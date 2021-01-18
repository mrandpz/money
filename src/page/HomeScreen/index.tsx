/*
 * @Author: Mr.pz
 * @Date: 2021-01-03 23:45:49
 * @Last Modified by:   Mr.pz
 * @Last Modified time: 2021-01-03 23:45:49
 * 首页
 */

import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import TopTabs from 'components/TopTabs';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopTabs />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});
export default HomeScreen;
