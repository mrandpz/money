/*
 * @Author: Mr.pz
 * @Date: 2021-01-03 23:45:49
 * @Last Modified by:   Mr.pz
 * @Last Modified time: 2021-01-03 23:45:49
 * 首页
 */

import * as React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import TopTabs from 'components/TopTabs';
import Grid from 'components/Grid/index';
import GridItem from 'components/Grid/gridItem';

interface Iinfo {
  imgSrc: string;
  price: string;
  url: string;
}
const goodsList: Iinfo[] = [
  {
    imgSrc:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190610%2F17%2F1560159102-EYNsuHBOwd.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612279989&t=202655775905503802227c0d2ca42314',
    price: '12.8',
    url: '跳到某个页面',
  },
  {
    imgSrc:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190610%2F17%2F1560159102-EYNsuHBOwd.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612279989&t=202655775905503802227c0d2ca42314',
    price: '13.8',
    url: '跳到某个页面',
  },
  {
    imgSrc:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190610%2F17%2F1560159102-EYNsuHBOwd.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612279989&t=202655775905503802227c0d2ca42314',
    price: '14.8',
    url: '跳到某个页面',
  },
  {
    imgSrc:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190610%2F17%2F1560159102-EYNsuHBOwd.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612279989&t=202655775905503802227c0d2ca42314',
    price: '18.8',
    url: '跳到某个页面',
  },
];
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopTabs />
      <Grid>
        {goodsList.map((item: Iinfo, index) => {
          return <GridItem info={item} key={index + item.imgSrc} />;
        })}
      </Grid>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});
export default HomeScreen;
