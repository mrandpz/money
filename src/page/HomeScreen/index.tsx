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
  },
});
export default HomeScreen;
